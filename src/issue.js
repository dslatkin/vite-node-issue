const modules = import.meta.glob('./*.wc.svelte', {
    eager: true
});

console.log(modules);
