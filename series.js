function fibonacci_series(n) {
    if(n===1){
        return[0,1];
    }else{
        var series = fibonacci_series(n-1);
        series.push(series[series.length - 1] + series[series.length - 2]);
        return series;
    }
};

console.log (fibonacci_series(10));

