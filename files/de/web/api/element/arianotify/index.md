---
title: "Element: ariaNotify() Methode"
short-title: ariaNotify()
slug: Web/API/Element/ariaNotify
l10n:
  sourceCommit: 3d7c7d4e151ff1b578bef4eff10c201b761a9d7d
---

{{ApiRef("DOM")}}

Die **`ariaNotify()`**-Methode der [`Element`](/de/docs/Web/API/Element) Schnittstelle stellt eine Zeichenkette in die Warteschlange, die von einem {{Glossary("screen_reader", "Screenreader")}} angekündigt werden soll.

## Syntax

```js-nolint
ariaNotify(announcement)
ariaNotify(announcement, options)
```

### Parameter

- `announcement`
  - : Ein String, der den anzukündigenden Text angibt.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `priority`
      - : Ein enumerierter Wert, der die Priorität der Ankündigung angibt.
        Mögliche Werte sind:
        - `normal`
          - : Die Ankündigung hat normale Priorität.
            Sie wird gesprochen, nachdem eine laufende Ankündigung eines Screenreaders abgeschlossen ist.
            Dies ist der Standardwert.
        - `high`
          - : Die Ankündigung hat hohe Priorität.
            Sie wird sofort gesprochen und unterbricht laufende Ankündigungen eines Screenreaders.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Die **`ariaNotify()`**-Methode kann verwendet werden, um programmatisch eine Screenreader-Ankündigung auszulösen. Diese Methode bietet ähnliche Funktionen wie [ARIA-Live-Bereiche](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions), mit einigen Vorteilen:

- Live-Bereiche können nur Ankündigungen infolge von Änderungen am DOM machen, während eine `ariaNotify()`-Ankündigung jederzeit erfolgen kann.
- Live-Bereichsankündigungen beinhalten das Vorlesen der aktualisierten Inhalte des geänderten DOM-Knotens, während die Inhalte einer `ariaNotify()`-Ankündigung unabhängig vom DOM-Inhalt definiert werden können.

Entwickler umgehen oft die Einschränkungen von Live-Bereichen, indem sie versteckte DOM-Knoten mit Live-Bereichen verwenden, deren Inhalte mit den anzukündigenden Inhalten aktualisiert werden. Dies ist ineffizient und fehleranfällig, und `ariaNotify()` bietet eine Möglichkeit, solche Probleme zu vermeiden.

Einige Screenreader lesen mehrere `ariaNotify()`-Ankündigungen in der Reihenfolge vor, aber dies kann nicht für alle Screenreader und Plattformen garantiert werden. Normalerweise wird nur die neueste Ankündigung gesprochen. Es ist zuverlässiger, mehrere Ankündigungen zu einer zusammenzufassen.

Zum Beispiel wären die folgenden Aufrufe:

```js
elemRef.ariaNotify("Hello there.");
elemRef.ariaNotify("The time is now 8 o'clock.");
```

besser kombiniert:

```js
elemRef.ariaNotify("Hello there. The time is now 8 o'clock.");
```

Ein `ariaNotify()`-Aufruf kann bei jedem Element im DOM ausgelöst werden, außer bei solchen, die der Browser nicht als "interessant" für die Barrierefreiheit erachtet und beim Aufbau des Barrierefreiheitsbaums ignoriert. Welche Elemente ignoriert werden, variiert je nach Browser, aber die Liste umfasst im Allgemeinen Containerelemente mit wenig bis keinem semantischen Wert, wie die {{htmlelement("html")}} und {{htmlelement("body")}} Elemente.

`ariaNotify()`-Ankündigungen erfordern keine {{Glossary("transient_activation", "flüchtige Aktivierung")}}; Sie sollten darauf achten, Screenreader-Benutzer nicht mit zu vielen Benachrichtigungen zu bombardieren, da dies die Benutzererfahrung beeinträchtigen könnte.

### Ankündigungsprioritäten

Eine `ariaNotify()`-Ankündigung mit `priority: high` wird vor einer `ariaNotify()`-Ankündigung mit `priority: normal` angesagt.

`ariaNotify()`-Ankündigungen entsprechen ungefähr den ARIA-Live-Bereichsankündigungen wie folgt:

- `ariaNotify()` `priority: high`: `aria-live="assertive"`.
- `ariaNotify()` `priority: normal`: `aria-live="polite"`.

Allerdings haben `aria-live`-Ankündigungen Vorrang vor den `ariaNotify()`-Ankündigungen.

### Sprachauswahl

Screenreader wählen eine passende Stimme aus, mit der `ariaNotify()`-Ankündigungen vorgelesen werden (in Bezug auf Akzent, Aussprache usw.) basierend auf der im Element angegebenen [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut oder, falls das Element kein angegebenes `lang`-Attribut hat, dem `lang`-Attribut, das auf seinem nächstgelegenen Vorfahren gesetzt ist. Wenn kein `lang`-Attribut im HTML angegeben ist, wird die Standardsprache des Benutzeragenten verwendet.

### Integration der Berechtigungspolitik

Die Verwendung von `ariaNotify()` in einem Dokument oder {{htmlelement("iframe")}} kann durch eine {{httpheader("Permissions-Policy/aria-notify", "aria-notify")}} [Berechtigungspolitik](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden.

Speziell dort, wo eine definierte Politik die Nutzung blockiert, schlagen alle Ankündigungen, die mittels `ariaNotify()` erstellt werden, stillschweigend fehl (sie werden nicht gesendet).

## Beispiele

Für ein ausführlicheres Beispiel siehe das [barrierefreie Einkaufsliste-Beispiel](/de/docs/Web/API/Document/ariaNotify#accessible_shopping_list_example) auf der [`Document.ariaNotify()`](/de/docs/Web/API/Document/ariaNotify) Seite. Das Beispiel würde genauso funktionieren, wenn Sie `ariaNotify()` auf einem Elementreferenz anstelle des `Document`-Objekts aufrufen.

### Grundlegende Verwendung von `ariaNotify()`

Dieses Beispiel enthält einen {{htmlelement("button")}}, der bei Klick eine Screenreader-Ankündigung auf sich selbst auslöst.

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

Versuchen Sie, einen Screenreader zu aktivieren und dann den Button zu drücken. Sie sollten "You ain't seen me, right?" vom Screenreader gesprochen hören.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.ariaNotify()`](/de/docs/Web/API/Document/ariaNotify)
- [ARIA live regions](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
