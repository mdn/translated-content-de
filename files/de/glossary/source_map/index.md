---
title: Source map
slug: Glossary/Source_map
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein **Source Map** ist ein {{Glossary("JSON", "JSON")}}-Dateiformat, das zwischen dem vom Browser empfangenen minifizierten oder transformierten Code und seiner ursprünglichen, unveränderten Form abbildet. Dies ermöglicht die Rekonstruktion und Nutzung des Originalcodes beim Debuggen.

Der von einem Browser ausgeführte Code wird häufig in irgendeiner Weise vom ursprünglichen Quellcode, der von einem Entwickler erstellt wurde, transformiert. Dafür gibt es verschiedene Gründe:

- Um die Auslieferung des Codes vom Server effizienter zu gestalten, indem Quellcode-Dateien kombiniert und minifiziert werden.
- Um ältere Browser zu unterstützen, indem moderne Funktionen in ältere Entsprechungen umgewandelt werden.
- Um Sprachen zu verwenden, die von Browsern nicht unterstützt werden, wie {{Glossary("TypeScript", "TypeScript")}} oder [Sass](https://sass-lang.com/).

In diesen Situationen ist das Debuggen des ursprünglichen Quellcodes viel einfacher als der Code im transformierten Zustand, den der Browser heruntergeladen hat.
Browser erkennen eine Source Map über den {{HTTPHeader("SourceMap")}} HTTP-Header für eine Ressource oder eine `sourceMappingURL`-Annotation im generierten Code.

## Beispiel

Betrachten Sie beispielsweise diese SCSS-Syntax von Sass:

```scss
ul {
  list-style: none;
  li {
    display: inline;
  }
}
```

Während des Build-Prozesses wird das SCSS in CSS umgewandelt.
Es wird eine Source Map-Datei `index.css.map` erzeugt und in einem Kommentar am Ende des CSS verlinkt:

```css
ul {
  list-style: none;
}
ul li {
  display: inline;
}

/*# sourceMappingURL=index.css.map */
```

Diese Map-Datei enthält nicht nur Zuordnungen zwischen dem ursprünglichen SCSS und dem generierten CSS, sondern auch den originalen SCSS-Quellcode in kodierter Form. Sie wird vom CSS-Parser des Browsers ignoriert, aber von den DevTools des Browsers verwendet:

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

Die Source Map ermöglicht es den DevTools des Browsers, auf bestimmte Zeilen in der ursprünglichen SCSS-Datei zu verlinken und den Quellcode anzuzeigen:

![Firefox DevTools, fokussiert auf das `li`-Element im DOM-Inspektor. Das Stil-Panel zeigt transformiertes CSS ohne Verschachtelung und einen Link zur dritten Zeile der Datei `index.scss`.](inspector.png)

![Firefox DevTools mit geöffneter `index.scss`-Datei im Stil-Editor. Der Editor ist auf die dritte Zeile des Quellcodes im SCSS-Format mit Verschachtelung fokussiert.](style-editor.png)

## Siehe auch

- [Source Map-Format-Spezifikation](https://tc39.es/ecma426/2024/)
- HTTP {{HTTPHeader("SourceMap")}} Antwort-Header
- [Firefox Developer Tools: Verwendung einer Source Map](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html)
