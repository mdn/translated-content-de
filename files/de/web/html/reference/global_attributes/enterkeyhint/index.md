---
title: HTML enterkeyhint globales Attribut
short-title: enterkeyhint
slug: Web/HTML/Reference/Global_attributes/enterkeyhint
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`enterkeyhint`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("Enumerated", "aufzählbares")}} Attribut, das bestimmt, welches Aktionslabel (oder Symbol) für die Eingabetaste auf virtuellen Tastaturen angezeigt werden soll.

{{InteractiveExample("HTML Demo: enterkeyhint", "tabbed-shorter")}}

```html interactive-example
<input enterkeyhint="go" />

<p contenteditable enterkeyhint="go">https://example.org</p>
```

## Beschreibung

[Formularsteuerungen](/de/docs/Learn_web_development/Extensions/Forms) (wie [`<textarea>`](/de/docs/Web/HTML/Reference/Elements/textarea) oder [`<input>`](/de/docs/Web/HTML/Reference/Elements/input) Elemente) oder Elemente, die [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) verwenden, können ein [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode) Attribut spezifizieren, um zu steuern, welche Art von virtueller Tastatur verwendet wird. Um das Benutzererlebnis weiter zu verbessern, kann die Eingabetaste speziell angepasst werden, indem ein `enterkeyhint` Attribut angegeben wird, das anzeigt, wie die Eingabetaste beschriftet werden soll (oder welches Symbol angezeigt werden soll). Die Eingabetaste repräsentiert in der Regel, was der Benutzer als Nächstes tun sollte; typische Aktionen sind: Text senden, eine neue Zeile einfügen oder suchen.

Wenn kein `enterkeyhint` Attribut angegeben ist, kann der User Agent kontextuelle Informationen aus den
[`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode), [`type`](/de/docs/Web/HTML/Reference/Elements/input#input_types) oder [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) Attributen verwenden, um ein geeignetes Label (oder Symbol) für die Eingabetaste anzuzeigen.

## Wert

Das `enterkeyhint` Attribut ist ein {{Glossary("Enumerated", "aufzählbares")}} Attribut und akzeptiert nur die folgenden Werte:

<table class="no-markdown">
  <thead>
    <tr>
      <th>Wert</th>
      <th>Beschreibung</th>
      <th>Beispiel-Label (abhängig vom User Agent und der Benutzersprache)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>enterkeyhint="enter"</code></td>
      <td>Normalerweise um eine neue Zeile einzufügen.</td>
      <td><kbd>return</kbd>, <kbd>↵</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="done"</code></td>
      <td>Bedeutet normalerweise, dass nichts mehr eingegeben werden muss und der Eingabemethoden-Editor (IME) geschlossen wird.</td>
      <td><kbd>done</kbd>, <kbd>✅</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="go"</code></td>
      <td>Bedeutet normalerweise, den Benutzer zum Ziel des eingegebenen Textes zu führen.</td>
      <td><kbd>go</kbd>, <kbd>🡢</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="next"</code></td>
      <td>Normalerweise, um den Benutzer zum nächsten Feld zu führen, das Text akzeptiert.</td>
      <td><kbd>next</kbd>, <kbd>⇥</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="previous"</code></td>
      <td>Normalerweise, um den Benutzer zum vorherigen Feld zu führen, das Text akzeptiert.</td>
      <td><kbd>return</kbd>, <kbd>⇤</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="search"</code></td>
      <td>Normalerweise, um den Benutzer zu den Suchergebnissen für den eingegebenen Text zu führen.</td>
      <td><kbd>search</kbd>, <kbd>🔍</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="send"</code></td>
      <td>Normalerweise, um den Text an sein Ziel zu senden.</td>
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
- [`type`](/de/docs/Web/HTML/Reference/Elements/input#input_types) und [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) Attribute bei [`<input>`](/de/docs/Web/HTML/Reference/Elements/input) Elementen
