---
title: Houdini-APIs
slug: Web/API/Houdini_APIs
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{DefaultAPISidebar("Houdini API")}}

Houdini ist eine Gruppe von Low-Level-APIs, die Teile der CSS-Engine offenlegen,
um Entwicklern die Möglichkeit zu geben, CSS zu erweitern, indem sie in den Stil- und Layout-Prozess der Rendering-Engine eines Browsers eingreifen.
Houdini ist eine Gruppe von APIs, die Entwicklern direkten Zugriff auf das [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) (CSSOM) gewähren,
sodass Entwickler Code schreiben können, den der Browser als CSS parsen kann,
um neue CSS-Funktionen zu erstellen, ohne auf deren native Implementierung in Browsern warten zu müssen.

## Vorteile von Houdini

Houdini ermöglicht schnellere Parse-Zeiten als die Verwendung von JavaScript [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) für Stiländerungen.
Browser parsen das CSSOM – einschließlich Layout-, Zeichen- und Kompositionsprozessen –
bevor sie Stilaktualisierungen aus Skripten anwenden.
Darüber hinaus werden Layout-, Zeichen- und Kompositionsprozesse für JavaScript-Stilaktualisierungen wiederholt.
Houdini-Code wartet nicht darauf, dass der erste Rendering-Zyklus abgeschlossen ist.
Stattdessen ist er in diesem ersten Zyklus enthalten – erzeugt also renderbare und verständliche Stile.
Houdini bietet eine objektbasierte API zur Arbeit mit CSS-Werten in JavaScript.

Houdinis [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ist ein CSS-Objektmodell mit Typen und Methoden,
das Werte als JavaScript-Objekte ausgibt,
was intuitivere CSS-Manipulationen ermöglicht als frühere zeichenfolgenbasierte [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) Manipulationen.
Jedes Element und jede Stylesheet-Regel hat eine Stilkarte, die über ihre [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap) zugänglich ist.

Ein Merkmal von CSS Houdini ist das [`Worklet`](/de/docs/Web/API/Worklet).
Mit Worklets können Sie modulare CSS erstellen,
das nur eine JavaScript-Zeile zum Importieren konfigurierbarer Komponenten erfordert:
keine Preprozessoren, Postprozessoren oder JavaScript-Frameworks nötig.

```js
CSS.paintWorklet.addModule("csscomponent.js");
```

Dieses hinzugefügte Modul enthält [`PaintWorkletGlobalScope.registerPaint`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint)-Funktionen,
die vollständig konfigurierbare Worklets registrieren.

> [!NOTE]
> Sie können Ihre eigenen Worklets schreiben oder von anderen erstellte Komponenten installieren.
> Die Website [Houdini.how](https://houdini.how/) ist eine Sammlung von Worklets,
> mit [Anleitungen zur Nutzung](https://houdini.how/usage/).

Die CSS-`paint()` Funktion ist eine zusätzliche Funktion, die vom {{cssxref("image")}} Typ unterstützt wird.
Sie nimmt Parameter entgegen, die den Namen des Worklets beinhalten,
sowie zusätzliche Parameter, die das Worklet benötigt.
Das Worklet hat auch Zugriff auf die benutzerdefinierten Eigenschaften des Elements:
sie müssen nicht als Funktionsargumente übergeben werden.

Im folgenden Beispiel wird die `paint()` Funktion mit einem Worklet namens `myComponent` aufgerufen.

```css
li {
  background-image: paint(myComponent, stroke, 10px);
  --highlights: blue;
  --lowlights: green;
}
```

> [!NOTE]
> Mit großer Macht kommt große Verantwortung!
> Mit Houdini _könnten_ Sie Ihre eigene Mauerwerk-, Raster- oder Regionenimplementierung erfinden,
> aber das ist nicht unbedingt die beste Idee.
> Die CSS-Arbeitsgruppe leistet viel Arbeit, um sicherzustellen, dass jedes Feature performant ist,
> alle Randfälle abdeckt und Sicherheit, Datenschutz und Barrierefreiheit berücksichtigt.
> Wenn Sie CSS mit Houdini erweitern, achten Sie darauf, diese Überlegungen im Hinterkopf zu behalten,
> und beginnen Sie klein, bevor Sie zu ehrgeizigeren Projekten übergehen.

## Die Houdini-APIs

Unten finden Sie Links zu den Hauptreferenzseiten, die die APIs abdecken, die unter das Houdini-Dach fallen,
sowie Links zu Leitfäden, die Ihnen helfen, falls Sie Hilfe beim Erlernen der Nutzung benötigen.

### CSS Properties and Values API

Definiert eine API zum Registrieren neuer CSS-Eigenschaften.
Eigenschaften, die mit dieser API registriert werden, erhalten eine Parse-Syntax, die einen Typ,
ein Verhaltensmerkmal der Vererbung und einen Anfangswert definiert.

- [CSS Properties and Values API reference](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS Properties and Values API guide](/de/docs/Web/API/CSS_Properties_and_Values_API/guide)
- [Intelligentere benutzerdefinierte Eigenschaften mit Houdinis neuer API](https://web.dev/articles/css-props-and-vals)

### CSS Typed OM

Das Konvertieren von CSSOM-Wertzeichenfolgen in bedeutungsvoll typisierte JavaScript-Repräsentationen und zurück kann einen erheblichen Performance-Overhead verursachen.
Das CSS Typed OM gibt CSS-Werte als typisierte JavaScript-Objekte aus, um deren performante Manipulation zu ermöglichen.

- [CSS Typed OM reference](/de/docs/Web/API/CSS_Typed_OM_API)
- [CSS Typed OM guide](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [Arbeiten mit dem neuen CSS Typed Object Model](https://developer.chrome.com/docs/css-ui/cssom)

### CSS Painting API

Entwickelt, um die Erweiterbarkeit von CSS zu verbessern,
ermöglicht es die Painting API Entwicklern, JavaScript-Funktionen zu schreiben, die direkt in den Hintergrund,
Rand oder Inhalt eines Elements über die `paint()`-Funktion von CSS zeichnen.

- [CSS Painting API reference](/de/docs/Web/API/CSS_Painting_API)
- [CSS Painting API guide](/de/docs/Web/API/CSS_Painting_API/Guide)
- [CSS Paint API](https://developer.chrome.com/blog/paintapi/)
- [Die CSS Paint API](https://css-tricks.com/the-css-paint-api/)
- [Simulieren von Drop Shadows mit der CSS Paint API](https://css-tricks.com/simulating-drop-shadows-with-the-css-paint-api/)
- [CSS Paint API Vorhersagbar zufällig](https://jakearchibald.com/2020/css-paint-predictably-random/)

### Worklets

Eine API zum Ausführen von Skripten in verschiedenen Phasen der Rendering-Pipeline unabhängig von der Haupt-JavaScript-Ausführungsumgebung.
Worklets sind konzeptionell ähnlich wie [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers),
und werden vom Rendering-Engine aufgerufen und erweitert.

- [Worklets reference](/de/docs/Web/API/Worklet)

### CSS Layout API

Entwickelt, um die Erweiterbarkeit von CSS zu verbessern,
ermöglicht diese API Entwicklern, ihre eigenen Layout-Algorithmen zu schreiben,
wie Mauerwerk oder Linienausrichtung.

_Diese API hat teilweise Unterstützung in Chrome Canary. Sie ist auf MDN noch nicht dokumentiert._

### CSS Parser API

Eine API, die den CSS-Parser direkter für das Parsen beliebiger CSS-ähnlicher Sprachen in eine leicht typisierte Darstellung zugänglich macht.

_Diese API ist derzeit ein Vorschlag und hat keine Implementierungen in Browsern oder Dokumentation auf MDN._

- [Vorschlag](https://github.com/WICG/css-parser-api)

### Font Metrics API

Eine API, die Schriftmetriken offenlegt und Zugriff auf typografische Layout-Ergebnisse gibt.

_Diese API ist derzeit ein Vorschlag und hat keine Implementierungen in Browsern oder Dokumentation auf MDN._

- [Vorschlag](https://github.com/w3c/css-houdini-drafts/blob/main/font-metrics-api/README.md)

## Siehe auch

- Die [Worklet-Bibliothek](https://houdini.how/) für Beispiele und Code.
- [Interaktive Einführung in Houdini](https://houdini.glitch.me/)
- [Ist Houdini schon bereit?](https://houdini.glitch.me/)
