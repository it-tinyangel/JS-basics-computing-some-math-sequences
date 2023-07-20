// 2. all four-digit numbers of the sequence 1000 1003 1006 1009 1012 1015 ... 9999
// this sequence is an arithmetic progression with initial element of 1000 and difference 3
// where each subsequent element is obtained by adding 3 to the previous element
for (let a = 1000; a <= 9999; a += 3)
	document.write(`<h2 style="color: hotpink">${a}</h2>`);

// 3. the first 55 elements of the sequence 1 3 5 7 9 11 13 15 17 etc
// this sequence is an arithmetic progression with initial element of 1 and difference 2,
// where each subsequent element is obtained by adding a 2 to the previous element
for (let n = 1, a = 0; a < 55; n += 2, a++)
	document.write(`<h2 style="color: white">${n}</h2>`);

// 4. all integer elements of the sequence 90 85 80 75 70 65 60 etc
// this sequence is an arithmetic progression with initial element of 90 and a difference of (- 5),
// where each subsequent element is obtained by subtracting 5 from the previous element
for (let a = 90; a >= 0; a += -5)
	document.write(`<h2 style="color: black">${a}</h2>`);

// 5. the first 20 elements of the sequence 2 4 8 16 32 64 128 ...
// this sequence is an geometric progression with initial element 2 and a doubling factor,
// where each subsequent element is obtained by multiplying the previous element by 2
for (let n = 2, a = 0; a < 20; n *= 2, a++)
	document.write(`<h2 style="color: lightcoral">${n}</h2>`);

// 6. all numbers in the sequence 2a - 1 (counter change step),
// where the initial value of a = 2 and which are less than 10000
// 2a - 1 looks like an arithmetic progression,
// but let's use 2a - 1 as the counter change step, as written in the task condition
for (let a = 2; a < 10000; a = 2 * a - 1)
	document.write(`<h2 style="color: lightseagreen">${a}</h2>`);

// 7. all two-digit elements of the sequence 2a + 200 (counter change step),
// where the initial value of the variable a = -166
// 2a + 200 looks like an arithmetic progression,
// but let's use 2a + 200 as the counter change step, as written in the task condition
for (let a = -166; a < 100; a = 2 * a + 200)
	if ((a > -100 && a <= -10) || (a >= 10 && a < 100))
		document.write(`<h2 style="color: hotpink">${a}</h2>`);
