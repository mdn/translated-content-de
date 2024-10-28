---
title: Houdini APIs
slug: Web/API/Houdini_APIs
l10n:
  sourceCommit: bff3a6a2e6b3c13dd8bb0c80a1eb9da08cce5dc6
---

{{DefaultAPISidebar("Houdini API")}}

Houdini ist eine Sammlung von Low-Level-APIs, die Teile der CSS-Engine freilegt,
und Entwicklern die Möglichkeit gibt, CSS zu erweitern, indem sie in den Stil- und Layoutprozess der Rendering-Engine eines Browsers eingreifen.
Houdini ist eine Gruppe von APIs, die Entwicklern direkten Zugang zum [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) (CSSOM) bietet,
wodurch sie Code schreiben können, den der Browser als CSS parsen kann,
und somit neue CSS-Funktionen schaffen, ohne darauf warten zu müssen, dass sie nativ in Browsern implementiert werden.

## Vorteile von Houdini

Houdini ermöglicht schnellere Parse-Zeiten im Vergleich zur Verwendung von JavaScript, um Stile mit [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) zu ändern.
Browser parsen das CSSOM — einschließlich Layout-, Mal- und Kompositvorgänge —
bevor irgendwelche Stilaktualisierungen, die in Skripten gefunden werden, angewendet werden.
Zusätzlich werden Layout-, Mal- und Kompositvorgänge für JavaScript-Stilaktualisierungen wiederholt.
Houdini-Code wartet nicht auf den Abschluss dieses ersten Rendering-Zyklus.
Vielmehr wird er in diesen ersten Zyklus einbezogen — und erzeugt renderbare, verständliche Stile.
Houdini bietet eine objektbasierte API zur Arbeit mit CSS-Werten in JavaScript.

Die [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) von Houdini ist ein CSS-Objektmodell mit Typen und Methoden,
das Werte als JavaScript-Objekte freilegt,
was zu einer intuitiveren CSS-Manipulation führt als frühere stringbasierte Manipulationen mit [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style).
Jedes Element und jede Stylesheet-Regel hat eine Stilkarte, die über ihre [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap) zugänglich ist.

Ein Merkmal von CSS Houdini ist der [`Worklet`](/de/docs/Web/API/Worklet).
Mit Worklets können Sie modulare CSS erstellen,
das nur eine einzige Zeile JavaScript benötigt, um konfigurierbare Komponenten zu importieren:
keine Vorprozessoren, Nachprozessoren oder JavaScript-Frameworks erforderlich.

```js
CSS.paintWorklet.addModule("css-component.js");
```

Dieses hinzugefügte Modul enthält Funktionen von [`PaintWorkletGlobalScope.registerPaint`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint),
die vollständig konfigurierbare Worklets registrieren.

> [!NOTE]
> Sie können Ihre eigenen Worklets schreiben oder von anderen erstellte Komponenten installieren.
> Die Website [Houdini.how](https://houdini.how/) ist eine Sammlung von Worklets,
> mit [Anleitungen zur Verwendung](https://houdini.how/usage/).

Die CSS-Funktion `paint()` ist eine zusätzliche Funktion, die vom {{cssxref("image")}}-Typ unterstützt wird.
Sie nimmt Parameter, die den Namen des Worklets sowie zusätzliche vom Worklet benötigte Parameter enthalten.
Das Worklet hat zudem Zugriff auf die benutzerdefinierten Eigenschaften des Elements:
sie müssen nicht als Funktionsargumente übergeben werden.

Im folgenden Beispiel wird die `paint()`-Funktion mit einem Worklet namens `myComponent` verwendet.

```css
li {
  background-image: paint(myComponent, stroke, 10px);
  --highlights: blue;
  --theme: green;
}
```

> [!NOTE]
> Mit großer Macht kommt große Verantwortung!
> Mit Houdini _könnten_ Sie Ihre eigene Umsetzung von Mauerwerk, Raster oder Regionen entwickeln,
> aber das ist nicht unbedingt die beste Idee.
> Die CSS-Arbeitsgruppe sorgt dafür, dass jede Funktion leistungsfähig ist,
> alle Randfälle berücksichtigt und Sicherheit, Datenschutz sowie Zugänglichkeit beachtet werden.
> Wenn Sie CSS mit Houdini erweitern, denken Sie an diese Überlegungen und beginnen Sie klein,
> bevor Sie zu ehrgeizigeren Projekten übergehen.

## Die Houdini-APIs

Nachfolgend finden Sie Links zu den Hauptreferenzseiten, die die APIs umfassen, die unter das Houdini-Dach fallen,
sowie Links zu Leitfäden, die Ihnen helfen, wenn Sie Hilfe beim Erlernen der Nutzung benötigen.

### CSS Properties and Values API

Definiert eine API zum Registrieren neuer CSS-Eigenschaften.
Eigenschaften, die mit dieser API registriert werden, erhalten eine Parssyntax, die einen Typ definiert,
sowie ein Vererbungsverhalten und einen Anfangswert.

- [CSS Properties and Values API Referenz](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS Properties and Values API Leitfaden](/de/docs/Web/API/CSS_Properties_and_Values_API/guide)
- [Intelligentere benutzerdefinierte Eigenschaften mit Houdinis neuer API](https://web.dev/articles/css-props-and-vals)

### CSS Typed OM

Das Konvertieren von CSSOM-Werte-Strings in sinnvoll typisierte JavaScript-Darstellungen und zurück kann einen erheblichen Leistungsaufwand verursachen.
Das CSS Typed OM legt CSS-Werte als typisierte JavaScript-Objekte offen, um ihre performante Manipulation zu ermöglichen.

- [CSS Typed OM Referenz](/de/docs/Web/API/CSS_Typed_OM_API)
- [CSS Typed OM Leitfaden](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [Arbeiten mit dem neuen CSS Typed Object Model](https://developer.chrome.com/docs/css-ui/cssom)

### CSS Painting API

Entwickelt, um die Erweiterbarkeit von CSS zu verbessern,
ermöglicht die Painting API Entwicklern das Schreiben von JavaScript-Funktionen, die direkt in den Hintergrund,
die Rahmen oder den Inhalt eines Elements über die `paint()`-Funktion von CSS zeichnen können.

- [CSS Painting API Referenz](/de/docs/Web/API/CSS_Painting_API)
- [CSS Painting API Leitfaden](/de/docs/Web/API/CSS_Painting_API/Guide)
- [CSS Paint API](https://developer.chrome.com/blog/paintapi/)
- [Die CSS Paint API](https://css-tricks.com/the-css-paint-api/)
- [Simulieren von Schlagschatten mit der CSS Paint API](https://css-tricks.com/simulating-drop-shadows-with-the-css-paint-api/)
- [CSS Paint API Vorhersehbar zufällig sein](https://jakearchibald.com/2020/css-paint-predictably-random/)

### Worklets

Eine API zum Ausführen von Skripten in verschiedenen Phasen der Rendering-Pipeline, unabhängig von der Haupt-JavaScript-Ausführungsumgebung.
Worklets sind konzeptionell ähnlich wie [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
und werden vom Rendering-Engine aufgerufen und erweitert.

- [Worklets Referenz](/de/docs/Web/API/Worklet)

### CSS Layout API

Entwickelt, um die Erweiterbarkeit von CSS zu verbessern,
ermöglicht diese API Entwicklern, ihre eigenen Layout-Algorithmen zu schreiben,
wie z.B. Mauerwerk oder Zeilenschnappung.

_Diese API hat teilweise Unterstützung in Chrome Canary. Sie ist noch nicht auf MDN dokumentiert._

### CSS Parser API

Eine API, die den CSS-Parser direkter freilegt, um beliebige CSS-ähnliche Sprachen in eine leicht typisierte Darstellung zu parsen.

_Diese API ist derzeit ein Vorschlag und hat keine Browserimplementierungen oder Dokumentation auf MDN._

- [Vorschlag](https://github.com/WICG/css-parser-api)

### Font Metrics API

Eine API, die Schriftmetriken freilegt und Zugang zu typografischen Layout-Ergebnissen gibt.

_Diese API ist derzeit ein Vorschlag und hat keine Browserimplementierungen oder Dokumentation auf MDN._

- [Vorschlag](https://github.com/w3c/css-houdini-drafts/blob/main/font-metrics-api/README.md)

## Siehe auch

- Die [Worklet-Bibliothek](https://houdini.how/) für Beispiele und Code.
- [Interaktive Einführung in Houdini](https://houdini.glitch.me/)
- [Is Houdini Ready Yet?](https://houdini.glitch.me/)
