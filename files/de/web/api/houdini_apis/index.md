---
title: Houdini-APIs
slug: Web/API/Houdini_APIs
l10n:
  sourceCommit: 23437e5d881b9b37b01ba03ae2ecd1f798970556
---

{{DefaultAPISidebar("Houdini API")}}

Houdini ist eine Reihe von Low-Level-APIs, die Teile der CSS-Engine verfügbar machen und den Entwicklern die Möglichkeit geben, CSS zu erweitern, indem sie in den Styling- und Layout-Prozess der Rendering-Engine eines Browsers eingreifen. Houdini ist eine Gruppe von APIs, die Entwicklern direkten Zugriff auf das [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) (CSSOM) gewähren. Dadurch können Entwickler Code schreiben, den der Browser wie CSS interpretieren kann, und neue CSS-Funktionen erstellen, ohne darauf warten zu müssen, dass sie nativ in Browsern implementiert werden.

## Vorteile von Houdini

Houdini ermöglicht schnellere Analysezeiten als die Verwendung von JavaScript [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) für Stiländerungen. Browser analysieren das CSSOM – einschließlich Layout-, Zeichen- und Kompositionsprozesse – bevor sie jegliche Stilaktualisierungen anwenden, die in Skripten gefunden werden. Darüber hinaus werden Layout-, Zeichen- und Kompositionsprozesse für JavaScript-Stilaktualisierungen wiederholt. Houdini-Code wartet nicht darauf, dass dieser erste Rendering-Zyklus abgeschlossen ist. Stattdessen wird er in diesen ersten Zyklus integriert und erstellt renderbare, verständliche Stile. Houdini stellt eine objektbasierte API für die Arbeit mit CSS-Werten in JavaScript bereit.

Die [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) von Houdini ist ein CSS-Objektmodell mit Typen und Methoden, das Werte als JavaScript-Objekte zugänglich macht, wodurch CSS-Manipulationen intuitiver werden als frühere, stringbasierte Operationen mit [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style). Jedes Element und jede Regel im Stylesheet hat eine Stilkarte, die über die [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap) zugänglich ist.

Ein Merkmal von CSS Houdini ist der [`Worklet`](/de/docs/Web/API/Worklet). Mit Worklets können Sie modulare CSS-Komponenten erstellen, die nur eine einzige JavaScript-Zeile benötigen, um konfigurierbare Komponenten zu importieren. Keine Preprozessoren, Postprozessoren oder JavaScript-Frameworks sind erforderlich.

```js
CSS.paintWorklet.addModule("css-component.js");
```

Dieses zusätzliche Modul enthält Funktionen wie [`PaintWorkletGlobalScope.registerPaint`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint), die vollständig konfigurierbare Worklets registrieren.

Die CSS-`paint()`-Funktion ist eine zusätzliche Funktion, die vom {{cssxref("image")}}-Typ unterstützt wird. Sie nimmt Parameter entgegen, darunter den Namen des Worklets sowie zusätzliche Parameter, die vom Worklet benötigt werden. Das Worklet hat außerdem Zugriff auf die benutzerdefinierten Eigenschaften des Elements: Diese müssen nicht als Funktionsargumente übergeben werden.

Im folgenden Beispiel wird die `paint()`-Funktion mit einem Worklet namens `myComponent` verwendet.

```css
li {
  background-image: paint(myComponent, stroke, 10px);
  --highlights: blue;
  --theme: green;
}
```

> [!NOTE]
> Mit großer Macht kommt große Verantwortung! Mit Houdini _könnten_ Sie Ihre eigene Umsetzung für Masonry, Grid oder Regions erfinden, aber das ist nicht unbedingt die beste Idee. Die CSS-Arbeitsgruppe leistet viel Arbeit, um sicherzustellen, dass jede Funktion performant ist, alle Edge-Cases berücksichtigt und Sicherheits-, Datenschutz- sowie Barrierefreiheitsaspekte beachtet. Wenn Sie CSS mit Houdini erweitern, denken Sie daran, diese Überlegungen im Auge zu behalten und beginnen Sie mit kleineren Projekten, bevor Sie ehrgeizigere Vorhaben angehen.

## Die Houdini-APIs

Unten finden Sie Links zu den Hauptreferenzseiten, die die APIs abdecken, die unter das Houdini-Dach fallen, zusammen mit Verweisen auf Leitfäden, die Ihnen bei der Nutzung helfen, falls Sie Unterstützung beim Lernen benötigen.

### CSS Properties and Values API

Definiert eine API zum Registrieren neuer CSS-Eigenschaften. Eigenschaften, die mit dieser API registriert wurden, werden mit einer Syntax zum Analysieren bereitgestellt, die einen Typ, ein Vererbungsverhalten und einen Anfangswert definiert.

- [CSS Properties and Values API-Referenz](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [Leitfaden zur CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API/guide)
- [Intelligente benutzerdefinierte Eigenschaften mit Houdinis neuer API](https://web.dev/articles/css-props-and-vals)

### CSS Typed OM

Das Konvertieren von CSSOM-Wert-Strings in bedeutungsvoll typisierte JavaScript-Repräsentationen und zurück kann eine erhebliche Leistungseinbuße verursachen. Das CSS Typed OM stellt CSS-Werte als typisierte JavaScript-Objekte dar, um ihre performante Manipulation zu ermöglichen.

- [CSS Typed OM-Referenz](/de/docs/Web/API/CSS_Typed_OM_API)
- [Leitfaden zum CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [Arbeiten mit dem neuen CSS Typed Object Model](https://developer.chrome.com/docs/css-ui/cssom)

### CSS Painting API

Entwickelt, um die Erweiterbarkeit von CSS zu verbessern. Die Painting API erlaubt es Entwicklern, JavaScript-Funktionen zu schreiben, die direkt in den Hintergrund, Rand oder Inhalt eines Elements via der CSS-Funktion `paint()` zeichnen.

- [CSS Painting API-Referenz](/de/docs/Web/API/CSS_Painting_API)
- [Leitfaden zur CSS Painting API](/de/docs/Web/API/CSS_Painting_API/Guide)
- [CSS Paint API](https://developer.chrome.com/blog/paintapi/)
- [Die CSS Paint API](https://css-tricks.com/the-css-paint-api/)
- [Drop Shadows mit der CSS Paint API simulieren](https://css-tricks.com/simulating-drop-shadows-with-the-css-paint-api/)
- [CSS Paint API: vorhersagbar zufällig sein](https://jakearchibald.com/2020/css-paint-predictably-random/)

### Worklets

Eine API zum Ausführen von Skripten in verschiedenen Phasen der Rendering-Pipeline, unabhängig von der Haupt-JavaScript-Ausführungsumgebung. Worklets sind konzeptionell ähnlich wie [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) und werden vom Rendering-Engine aufgerufen und erweitert.

- [Worklets-Referenz](/de/docs/Web/API/Worklet)

### CSS Layout API

Entwickelt, um die Erweiterbarkeit von CSS zu verbessern. Diese API ermöglicht es Entwicklern, ihre eigenen Layout-Algorithmen zu schreiben, wie z. B. Masonry- oder Zeilen-Snapping-Layouts.

_Diese API hat teilweise Unterstützung in Chrome Canary, ist jedoch noch nicht auf MDN dokumentiert._

### CSS Parser API

Eine API, die den CSS-Parser direkter verfügbar macht, um beliebige CSS-ähnliche Sprachen in eine leicht typisierte Darstellung zu parsen.

_Diese API ist derzeit ein Vorschlag und hat keine Browser-Implementierungen oder Dokumentationen auf MDN._

- [Vorschlag](https://github.com/WICG/css-parser-api)

### Font Metrics API

Eine API, die Schriftartenmetriken verfügbar macht, sodass typografische Layout-Ergebnisse zugänglich werden.

_Diese API ist derzeit ein Vorschlag und hat keine Browser-Implementierungen oder Dokumentationen auf MDN._

- [Vorschlag](https://github.com/w3c/css-houdini-drafts/blob/main/font-metrics-api/README.md)

## Siehe auch

- [Interaktive Einführung in Houdini](https://houdini.glitch.me/)
- [Ist Houdini schon bereit?](https://houdini.glitch.me/)
