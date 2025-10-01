---
title: "Element: ariaNotify() Methode"
short-title: ariaNotify()
slug: Web/API/Element/ariaNotify
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{ApiRef("DOM")}}{{SeeCompatTable}}{{non-standard_header}}

Die **`ariaNotify()`** Methode des [`Element`](/de/docs/Web/API/Element) Interface spezifiziert, dass eine gegebene Textzeichenfolge von einem {{Glossary("screen_reader", "Screenreader")}} angekündigt werden soll, falls dieser verfügbar und aktiv ist.

## Syntax

```js-nolint
ariaNotify(announcement)
ariaNotify(announcement, options)
```

### Parameter

- `announcement`
  - : Eine Zeichenkette, die den anzukündigenden Text spezifiziert.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `priority`
      - : Ein enumerierter Wert, der die Priorität der Ankündigung angibt. Mögliche Werte sind:
        - `normal`
          - : Die Ankündigung hat normale Priorität und wird nach der aktuell von einem Screenreader gemachten Ankündigung gesprochen.
        - `high`
          - : Die Ankündigung hat hohe Priorität und wird sofort gesprochen, wobei jede derzeit vom Screenreader getroffene Ankündigung unterbrochen wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Die **`ariaNotify()`** Methode kann verwendet werden, um programmgesteuert eine Screenreader-Ankündigung auszulösen. Diese Methode bietet ähnliche Funktionalität wie [ARIA-Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) mit einigen Vorteilen:

- Live-Regionen können nur nach Änderungen des DOM Ankündigungen machen, während eine `ariaNotify()`-Ankündigung jederzeit gemacht werden kann.
- Live-Region-Ankündigungen beinhalten das Vorlesen des aktualisierten Inhalts des geänderten DOM-Knotens, während `ariaNotify()`-Ankündigungsinhalt unabhängig vom DOM-Inhalt definiert werden kann.

Entwickler umgehen oft die Einschränkungen von Live-Regionen, indem sie versteckte DOM-Knoten mit darauf gesetzten Live-Regionen verwenden, die mit dem anzukündigenden Inhalt aktualisiert werden. Dies ist ineffizient und fehleranfällig, und `ariaNotify()` bietet eine Möglichkeit, solche Probleme zu vermeiden.

Einige Screenreader lesen mehrere `ariaNotify()`-Ankündigungen in Reihenfolge vor, aber dies kann nicht für alle Screenreader und Plattformen garantiert werden. Normalerweise wird nur die jüngste Ankündigung gesprochen. Es ist zuverlässiger, mehrere Ankündigungen in einer zu kombinieren.

Zum Beispiel, die folgenden Anrufe:

```js
elemRef.ariaNotify("Hello there.");
elemRef.ariaNotify("The time is now 8 o'clock.");
```

würden besser kombiniert werden:

```js
elemRef.ariaNotify("Hello there. The time is now 8 o'clock.");
```

Ein `ariaNotify()`-Aufruf kann auf jedem Element im DOM ausgelöst werden, außer auf solchen, die der Browser nicht als "interessant" für Barrierefreiheit betrachtet und die beim Aufbau des Accessibility-Baums ignoriert werden. Welche Elemente genau ignoriert werden, variiert je nach Browser, aber die Liste umfasst in der Regel Container-Elemente mit wenig bis keinem semantischen Wert, wie die Elemente {{htmlelement("html")}} und {{htmlelement("body")}}.

`ariaNotify()`-Ankündigungen erfordern keine {{Glossary("transient_activation", "transiente Aktivierung")}}; Sie sollten darauf achten, Screenreader-Benutzer nicht mit zu vielen Benachrichtigungen zu überhäufen, da dies eine schlechte Benutzererfahrung schaffen könnte.

### Ankündigungsprioritäten

Eine `ariaNotify()`-Ankündigung mit `priority: high` wird vor einer `ariaNotify()`-Ankündigung mit `priority: normal` angekündigt.

`ariaNotify()`-Ankündigungen entsprechen grob den ARIA-Live-Region-Ankündigungen wie folgt:

- `ariaNotify()` `priority: high`: `aria-live="assertive"`.
- `ariaNotify()` `priority: normal`: `aria-live="polite"`.

Jedoch haben `aria-live`-Ankündigungen Vorrang vor `ariaNotify()`-Ankündigungen.

### Sprachauswahl

Screenreader wählen eine geeignete Stimme aus, um `ariaNotify()`-Ankündigungen vorzulesen (hinsichtlich Akzent, Aussprache usw.), basierend auf der im Element spezifizierten Sprache im [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) Attribut oder, wenn das Element kein spezifiziertes `lang` Attribut hat, dem `lang` Attribut, das am nächsten Vorfahren gesetzt ist. Wenn kein `lang` Attribut im HTML spezifiziert ist, wird die Standardsprache des Benutzeragenten verwendet.

### Integration in die Berechtigungspolitik

Die Nutzung von `ariaNotify()` in einem Dokument oder {{htmlelement("iframe")}} kann durch eine {{httpheader("Permissions-Policy/aria-notify", "aria-notify")}} [Berechtigungspolitik](/de/docs/Web/HTTP/Guides/Permissions_Policy) kontrolliert werden.

Insbesondere dort, wo eine definierte Politik die Nutzung blockiert, schlagen alle mit `ariaNotify()` erstellten Ankündigungen fehl (sie werden nicht gesendet).

## Beispiele

Für ein umfangreicheres Beispiel sehen Sie sich das [barrierefreie Einkaufslisten-Beispiel](/de/docs/Web/API/Document/ariaNotify#accessible_shopping_list_example) auf der [`Document.ariaNotify()`](/de/docs/Web/API/Document/ariaNotify) Seite an. Das Beispiel würde genauso funktionieren, wenn Sie `ariaNotify()` auf einem Elementreferenz statt auf dem `Document` Objekt aufrufen.

### Grundlegende `ariaNotify()`-Verwendung

Diese Beispiel enthält einen {{htmlelement("button")}}, der eine Screenreader-Ankündigung auf sich selbst auslöst, wenn er geklickt wird.

```html live-sample___basic-arianotify
<button>Press</button>
```

```css hidden live-sample___basic-arianotify
html,
body {
  height: 100%;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

```js live-sample___basic-arianotify
document.querySelector("button").addEventListener("click", () => {
  document.querySelector("button").ariaNotify("You ain't seen me, right?");
});
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{EmbedLiveSample("basic-arianotify", "100%", 60, , , , "aria-notify")}}

Versuchen Sie, einen Screenreader zu aktivieren und dann die Taste zu drücken. Sie sollten "You ain't seen me, right?" vom Screenreader gesprochen hören.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.ariaNotify()`](/de/docs/Web/API/Document/ariaNotify)
- [ARIA-Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
