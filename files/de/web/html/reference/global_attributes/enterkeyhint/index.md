---
title: HTML enterkeyhint globales Attribut
short-title: enterkeyhint
slug: Web/HTML/Reference/Global_attributes/enterkeyhint
l10n:
  sourceCommit: 7885271e36e9d2744296c01f400653f63caa6f75
---

{{HTMLSidebar("Global_attributes")}}

Das **`enterkeyhint`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes)
ist ein {{Glossary("Enumerated", "aufgezähltes")}} Attribut, das definiert, welches Aktionslabel (oder welches Symbol) für die Eingabetaste auf virtuellen Tastaturen angezeigt werden soll.

{{InteractiveExample("HTML Demo: enterkeyhint", "tabbed-shorter")}}

```html interactive-example
<input enterkeyhint="go" />

<p contenteditable enterkeyhint="go">https://example.org</p>
```

## Beschreibung

[Formularelemente](/de/docs/Learn_web_development/Extensions/Forms) (wie [`<textarea>`](/de/docs/Web/HTML/Reference/Elements/textarea)
oder [`<input>`](/de/docs/Web/HTML/Reference/Elements/input) Elemente) oder Elemente, die
[`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) verwenden, können ein
[`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode) Attribut angeben, um zu steuern, welche Art von virtueller Tastatur verwendet wird. Um das Benutzererlebnis weiter zu verbessern, kann die Eingabetaste speziell angepasst werden, indem ein `enterkeyhint` Attribut angegeben wird, das anzeigt, wie die Eingabetaste beschriftet werden soll (oder welches Symbol gezeigt werden soll). Die Eingabetaste steht normalerweise dafür, was der Benutzer als nächstes tun sollte; typische Aktionen sind: Text senden, eine neue Zeile einfügen oder suchen.

Wenn kein `enterkeyhint` Attribut angegeben ist, kann der Benutzeragent kontextbezogene Informationen aus den Attributen
[`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode),
[`type`](/de/docs/Web/HTML/Reference/Elements/input#input_types),
oder [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) verwenden, um eine passende Bezeichnung (oder ein Symbol) für die Eingabetaste anzuzeigen.

### Werte

Das `enterkeyhint` Attribut ist ein {{Glossary("Enumerated", "aufgezähltes")}} Attribut und akzeptiert nur die folgenden Werte:

<table class="no-markdown">
  <thead>
    <tr>
      <th>Wert</th>
      <th>Beschreibung</th>
      <th>Beispielhafte Beschriftung (abhängig vom Benutzeragenten und der Benutzersprache)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>enterkeyhint="enter"</code></td>
      <td>Typischerweise zum Einfügen einer neuen Zeile.</td>
      <td><kbd>return</kbd>, <kbd>↵</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="done"</code></td>
      <td>Typischerweise bedeutet es, dass nichts mehr eingegeben werden muss und der Eingabemethoden-Editor (IME) geschlossen wird.</td>
      <td><kbd>done</kbd>, <kbd>✅</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="go"</code></td>
      <td>Typischerweise soll der Benutzer zum Ziel des eingegebenen Textes geführt werden.</td>
      <td><kbd>go</kbd>, <kbd>🡢</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="next"</code></td>
      <td>Typischerweise zum Wechseln zum nächsten Feld, das Text akzeptiert.</td>
      <td><kbd>next</kbd>, <kbd>⇥</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="previous"</code></td>
      <td>Typischerweise zum Wechseln zum vorherigen Feld, das Text akzeptiert.</td>
      <td><kbd>return</kbd>, <kbd>⇤</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="search"</code></td>
      <td>Typischerweise führt es den Benutzer zu den Ergebnissen der Suche nach dem eingegebenen Text.</td>
      <td><kbd>search</kbd>, <kbd>🔍</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="send"</code></td>
      <td>Typischerweise um den Text an sein Ziel zu senden.</td>
      <td><kbd>send</kbd></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.enterKeyHint`](/de/docs/Web/API/HTMLElement/enterKeyHint) Eigenschaft, die dieses Attribut widerspiegelt
- [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode) globales Attribut
- [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) globales Attribut
- [`type`](/de/docs/Web/HTML/Reference/Elements/input#input_types) und
  [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) Attribute bei
  [`<input>`](/de/docs/Web/HTML/Reference/Elements/input) Elementen
