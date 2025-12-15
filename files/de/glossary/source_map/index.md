---
title: Source Map
slug: Glossary/Source_map
l10n:
  sourceCommit: 7d4f930455a349e3c73836500add3d4840c76f5d
---

Ein **Source Map** ist ein {{Glossary("JSON", "JSON")}}-Dateiformat, das zwischen komprimiertem oder transformiertem Code, der vom Browser empfangen wird, und seiner ursprünglichen, unmodifizierten Form vermittelt, sodass der ursprüngliche Code rekonstruiert und beim Debuggen verwendet werden kann.

Der vom Browser ausgeführte Code wird oft in irgendeiner Weise von der ursprünglichen Quelle, die vom Entwickler erstellt wurde, transformiert. Dafür gibt es mehrere Gründe:

- Um die Bereitstellung von Code vom Server effizienter zu gestalten, indem Quelldateien kombiniert und minimiert werden.
- Um ältere Browser zu unterstützen, indem moderne Funktionen in ältere Äquivalente transformiert werden.
- Um Sprachen zu verwenden, die von Browsern nicht unterstützt werden, wie {{Glossary("TypeScript", "TypeScript")}} oder [Sass](https://sass-lang.com/).

In diesen Situationen ist es intuitiver, den ursprünglichen Quellcode zu debuggen als den transformierten Code, den der Browser heruntergeladen hat. Browser erkennen ein Source Map über den {{HTTPHeader("SourceMap")}} HTTP-Header für eine Ressource oder eine `sourceMappingURL`-Annotation im generierten Code.

## Beispiel

Beispielsweise betrachten wir diesen SCSS-Syntax von Sass:

```scss
ul {
  list-style: none;
  li {
    display: inline;
  }
}
```

Während des Build-Prozesses wird das SCSS in CSS transformiert. Eine Source Map-Datei `index.css.map` wird generiert und in einem Kommentar am Ende des CSS verlinkt:

```css
ul {
  list-style: none;
}
ul li {
  display: inline;
}

/*# sourceMappingURL=index.css.map */
```

Diese Map-Datei enthält nicht nur Zuordnungen zwischen dem ursprünglichen SCSS und dem generierten CSS, sondern auch den ursprünglichen SCSS-Quellcode in codierter Form. Sie wird vom CSS-Parser des Browsers ignoriert, aber von den DevTools des Browsers verwendet:

```json
{
  "version": 3,
  "sourceRoot": "",
  "sources": ["index.scss"],
  "names": [],
  "mappings": "AAAA;EACC;;AACA;EACC",
  "file": "index.css"
}
```

Die Source Map ermöglicht es den DevTools des Browsers, auf spezifische Zeilen in der ursprünglichen SCSS-Datei zu verlinken und den Quellcode anzuzeigen:

![Firefox DevTools fokussiert auf das li-Element im DOM-Inspektor. Das Stil-Panel zeigt transformiertes CSS ohne Verschachtelung und einen Link zur dritten Zeile der index.scss-Datei.](inspector.png)

![Firefox DevTools mit der index.scss-Datei im Style-Editor geöffnet. Der Editor fokussiert die dritte Zeile des Quellcodes im SCSS-Format mit Verschachtelung.](style-editor.png)

## Siehe auch

- [Source Map-Format-Spezifikation](https://tc39.es/ecma426/2024/)
- HTTP {{HTTPHeader("SourceMap")}} Antwort-Header
- [Firefox Developer Tools: Verwendung einer Source Map](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html)
