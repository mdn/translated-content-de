---
title: Source-Map
slug: Glossary/Source_map
l10n:
  sourceCommit: adacd503824e4e3875d7e0489f06decadfea21a1
---

{{GlossarySidebar}}

Eine **Source-Map** ist ein {{Glossary("JSON", "JSON")}}-Dateiformat, das eine Zuordnung zwischen minifizierten oder transformierten Code, den der Browser empfängt, und seiner ursprünglichen, unveränderten Form erstellt. Dies ermöglicht, den Originalcode zu rekonstruieren und beim Debuggen zu verwenden.

Der vom Browser ausgeführte Code wird häufig in irgendeiner Form vom ursprünglichen Quellcode, der von einem Entwickler erstellt wurde, transformiert. Es gibt mehrere Gründe dafür:

- Um die Auslieferung des Codes vom Server durch Kombinieren und Minifizieren der Quelldateien effizienter zu gestalten.
- Um ältere Browser zu unterstützen, indem moderne Funktionen in ältere Äquivalente umgewandelt werden.
- Um Sprachen zu nutzen, die von Browsern nicht unterstützt werden, wie {{Glossary("TypeScript", "TypeScript")}} oder [Sass](https://sass-lang.com/).

In diesen Situationen ist das Debuggen des ursprünglichen Quellcodes viel einfacher als der Quellcode im transformierten Zustand, den der Browser heruntergeladen hat. Browser erkennen eine Source-Map über den {{HTTPHeader("SourceMap")}} HTTP-Header für eine Ressource oder eine `sourceMappingURL`-Annotation im generierten Code.

## Beispiel

Betrachten Sie zum Beispiel diese SCSS-Syntax von Sass:

```scss
ul {
  list-style: none;
  li {
    display: inline;
  }
}
```

Während des Build-Prozesses wird das SCSS in CSS umgewandelt. Eine Source-Map-Datei `index.css.map` wird generiert und wird in einem Kommentar am Ende des CSS verlinkt:

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

Die Source-Map ermöglicht es den DevTools des Browsers, zu bestimmten Zeilen in der ursprünglichen SCSS-Datei zu verlinken und den Quellcode anzuzeigen:

![Firefox DevTools im Fokus auf das li-Element im DOM-Inspektor. Das Style-Panel zeigt transformiertes CSS ohne Verschachtelung und einen Link zur dritten Zeile der index.scss-Datei.](inspector.png)

![Firefox DevTools mit der index.scss-Datei, die im Style-Editor geöffnet ist. Der Editor fokussiert sich auf die dritte Zeile des Quellcodes im SCSS-Format mit Verschachtelung.](style-editor.png)

## Siehe auch

- [Source-Map-Format-Spezifikation](https://tc39.es/ecma426/2024/)
- HTTP {{HTTPHeader("SourceMap")}} Antwort-Header
- [Firefox Developer Tools: Nutzung einer Source-Map](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html)
