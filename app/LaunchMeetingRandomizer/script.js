'use strict'


//array.from()を使った実装の方がいいかも？
//こちらでlist持つ必要もないかも
const genelateList = () => {

	const defaultList = [
		"てつ",
		"まさる",
		"めり",
		"まーこ",
		"ベール",
		"まっちゃん",
		"ズッキー",
		"ぽん",
		"ゆずる",
		"とみぞー",
		"ちゃお",
		"きゃみー"
	]

	let markedList = defaultList

	for (let i=0; i<document.form1.userName.length; i++) {
		if (document.form1.userName[i].checked) {
			markedList[i] = 0
		}
	}

	const list = markedList.filter(userName => userName != 0)

	return list
}

const listRandomizer = (list) => {
	let randomizedList = []

	while (list.length > 0) {
		const n = list.length
		const k = Math.floor(Math.random() * n)

		randomizedList.push(list[k])
		list.splice(k, 1)
	}
	return randomizedList
}

const splitList = (list, group) => {

	const size =  Math.floor(list.length / group)
	let sizeRemainder = list.length % group

	let splitList = []

	for (let i=0; i<group; i++){
		splitList[i] = []
		if (sizeRemainder > 0){
			for (let j=0; j<size+1; j++){
				splitList[i][j] = list.shift()
			}
		}
		else{
			for(let j=0; j<size; j++){
				splitList[i][j] = list.shift()
			}
		}
		sizeRemainder--
	}
	return splitList
}

const writeList = () => {

	const list = genelateList()
	const randomizedList = listRandomizer(list)
	const splitedList = splitList(randomizedList, document.form1.split.value)

	let outputTarget = document.getElementById("output")
	outputTarget.innerHTML = ''

	let listNumber = 1
	for (const currentList of splitedList){
		outputTarget.innerHTML += listNumber + '\.' + currentList + '\n'
		listNumber++;
	}

}

const copy = () => {

	const copyTarget = document.getElementById("output");
	copyTarget.select();
	document.execCommand("Copy");
}
