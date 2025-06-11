---
title: HTML enterkeyhint global attribute
short-title: enterkeyhint
slug: Web/HTML/Reference/Global_attributes/enterkeyhint
l10n:
  sourceCommit: d9b6cad3b5e14b42061608fb5283e32c75808a3d
---

{{HTMLSidebar("Global_attributes")}}

Das **`enterkeyhint`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("Enumerated", "aufgezähltes")}} Attribut, das festlegt, welches Aktionslabel (oder Symbol) für die Eingabetaste auf virtuellen Tastaturen angezeigt werden soll.

{{InteractiveExample("HTML Demo: enterkeyhint", "tabbed-shorter")}}

```html interactive-example
<input enterkeyhint="go" />

<p contenteditable enterkeyhint="go">https://example.org</p>
```

## Beschreibung

[Formularsteuerungen](/de/docs/Learn_web_development/Extensions/Forms) (wie [`<textarea>`](/de/docs/Web/HTML/Reference/Elements/textarea) oder [`<input>`](/de/docs/Web/HTML/Reference/Elements/input) Elemente) oder Elemente, die [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) verwenden, können ein [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode) Attribut angeben, um zu steuern, welche Art von virtueller Tastatur verwendet wird. Um die Benutzererfahrung weiter zu verbessern, kann die Eingabetaste spezifisch angepasst werden, indem ein `enterkeyhint` Attribut bereitgestellt wird, das angibt, wie die Eingabetaste beschriftet werden soll (oder welches Symbol angezeigt werden soll). Die Eingabetaste repräsentiert normalerweise, was der Benutzer als nächstes tun sollte; typische Aktionen sind: Text senden, eine neue Zeile einfügen oder suchen.

Wenn kein `enterkeyhint` Attribut angegeben wird, kann der Benutzeragent kontextbezogene Informationen aus den [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode), [`type`](/de/docs/Web/HTML/Reference/Elements/input#input_types) oder [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) Attributen verwenden, um ein geeignetes Eingabetastenlabel (oder Symbol) anzuzeigen.

## Wert

Das `enterkeyhint` Attribut ist ein {{Glossary("Enumerated", "aufgezähltes")}} Attribut und akzeptiert nur die folgenden Werte:

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
      <td>Typischerweise bedeutet es, dass es nichts mehr einzugeben gibt und der Eingabemethoden-Editor (IME) geschlossen wird.</td>
      <td><kbd>done</kbd>, <kbd>✅</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="go"</code></td>
      <td>Typischerweise bedeutet es, den Benutzer zum Ziel des von ihm eingegebenen Textes zu bringen.</td>
      <td><kbd>go</kbd>, <kbd>🡢</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="next"</code></td>
      <td>Typischerweise führt es den Benutzer zum nächsten Feld, das Text akzeptieren wird.</td>
      <td><kbd>next</kbd>, <kbd>⇥</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="previous"</code></td>
      <td>Typischerweise führt es den Benutzer zum vorherigen Feld, das Text akzeptieren wird.</td>
      <td><kbd>return</kbd>, <kbd>⇤</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="search"</code></td>
      <td>Typischerweise führt es den Benutzer zu den Ergebnissen der Suche nach dem eingegebenen Text.</td>
      <td><kbd>search</kbd>, <kbd>🔍</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="send"</code></td>
      <td>Typischerweise wird der Text an sein Ziel geliefert.</td>
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
- [`type`](/de/docs/Web/HTML/Reference/Elements/input#input_types) und [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) Attribute auf [`<input>`](/de/docs/Web/HTML/Reference/Elements/input) Elementen
