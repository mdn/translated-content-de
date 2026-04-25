---
title: "`enterkeyhint` HTML-Globalattribut"
short-title: enterkeyhint
slug: Web/HTML/Reference/Global_attributes/enterkeyhint
l10n:
  sourceCommit: 9c70c6ff09189cad43d40e241fbd2fe67349c3c2
---

Das **`enterkeyhint`** [Globalattribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("Enumerated", "aufgezähltes")}} Attribut, das festlegt, welches Aktionslabel (oder welches Symbol) für die Eingabetaste auf virtuellen Tastaturen angezeigt werden soll.

{{InteractiveExample("HTML Demo: enterkeyhint", "tabbed-shorter")}}

```html interactive-example
<input enterkeyhint="go" />

<p contenteditable enterkeyhint="go">https://example.org</p>
```

## Beschreibung

[Formularsteuerelemente](/de/docs/Learn_web_development/Extensions/Forms) (wie [`<textarea>`](/de/docs/Web/HTML/Reference/Elements/textarea) oder [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Elemente) oder Elemente, die [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) verwenden, können ein [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode)-Attribut spezifizieren, um zu steuern, welche Art von virtueller Tastatur verwendet wird. Um die Benutzererfahrung weiter zu verbessern, kann die Eingabetaste speziell angepasst werden, indem ein `enterkeyhint`-Attribut angegeben wird, das festlegt, wie die Eingabetaste beschriftet sein soll (oder welches Symbol angezeigt werden soll). Die Eingabetaste repräsentiert üblicherweise, was der Benutzer als Nächstes tun soll; typische Aktionen sind: Text senden, eine neue Zeile einfügen oder suchen.

Wenn kein `enterkeyhint`-Attribut angegeben ist, kann der Benutzeragent kontextuelle Informationen aus den Attributen [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode), [`type`](/de/docs/Web/HTML/Reference/Elements/input#input_types) oder [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) verwenden, um ein geeignetes Eingabetasten-Label (oder Symbol) anzuzeigen.

## Wert

Das `enterkeyhint`-Attribut ist ein {{Glossary("Enumerated", "aufgezähltes")}} Attribut und akzeptiert nur die folgenden Werte:

<table class="no-markdown">
  <thead>
    <tr>
      <th>Wert</th>
      <th>Beschreibung</th>
      <th>Beispiel-Label (abhängig von Benutzeragent und Benutzersprache)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>enterkeyhint="enter"</code></td>
      <td>Typischerweise das Einfügen einer neuen Zeile.</td>
      <td><kbd>return</kbd>, <kbd>↵</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="done"</code></td>
      <td>Typischerweise bedeutet dies, dass es nichts mehr einzugeben gibt und der Eingabemethodeneditor (IME) geschlossen wird.</td>
      <td><kbd>done</kbd>, <kbd>✅</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="go"</code></td>
      <td>Typischerweise, um den Benutzer zum Ziel des von ihm eingegebenen Textes zu führen.</td>
      <td><kbd>go</kbd>, <kbd>🡢</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="next"</code></td>
      <td>Typischerweise, um den Benutzer zum nächsten Feld zu führen, das Text akzeptiert.</td>
      <td><kbd>next</kbd>, <kbd>⇥</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="previous"</code></td>
      <td>Typischerweise, um den Benutzer zum vorherigen Feld zu führen, das Text akzeptiert.</td>
      <td><kbd>return</kbd>, <kbd>⇤</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="search"</code></td>
      <td>Typischerweise, um den Benutzer zu den Ergebnissen der Suche nach dem von ihm eingegebenen Text zu führen.</td>
      <td><kbd>search</kbd>, <kbd>🔍</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="send"</code></td>
      <td>Typischerweise, um den Text an sein Ziel zu übermitteln.</td>
      <td><kbd>send</kbd></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.enterKeyHint`](/de/docs/Web/API/HTMLElement/enterKeyHint)-Eigenschaft, die dieses Attribut widerspiegelt
- [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode) Globalattribut
- [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Globalattribut
- [`type`](/de/docs/Web/HTML/Reference/Elements/input#input_types) und [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) Attribute auf [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Elementen
