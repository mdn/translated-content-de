---
title: enterkeyhint
slug: Web/HTML/Reference/Global_attributes/enterkeyhint
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar("Global_attributes")}}

Das **`enterkeyhint`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes)
ist ein {{Glossary("Enumerated", "aufzählbares")}} Attribut, das bestimmt, welches Aktionslabel (oder Icon) für die Enter-Taste auf virtuellen Tastaturen angezeigt werden soll.

{{InteractiveExample("HTML Demo: enterkeyhint", "tabbed-shorter")}}

```html interactive-example
<input enterkeyhint="go" />

<p contenteditable enterkeyhint="go">https://example.org</p>
```

## Beschreibung

[Formularsteuerungen](/de/docs/Learn_web_development/Extensions/Forms) (wie z.B. [`<textarea>`](/de/docs/Web/HTML/Reference/Elements/textarea)
oder [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Elemente) oder Elemente, die
[`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) verwenden, können ein
[`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode)-Attribut angeben, um zu steuern, welche Art von virtueller Tastatur
verwendet werden soll. Um die Benutzererfahrung weiter zu verbessern, kann die Enter-Taste durch das Hinzufügen des `enterkeyhint`-Attributs individuell angepasst werden, das angibt, wie die Enter-Taste beschriftet werden soll (oder welches Icon angezeigt werden soll). Die Enter-Taste repräsentiert in der Regel die nächste Aktion, die der Benutzer ausführen soll; typische Aktionen umfassen: Text senden, eine neue Zeile einfügen oder suchen.

Wenn kein `enterkeyhint`-Attribut angegeben ist, kann der Benutzeragent kontextbezogene Informationen aus den
[`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode),
[`type`](/de/docs/Web/HTML/Reference/Elements/input#input_types),
oder [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attributen nutzen, um ein geeignetes Enter-Tastensymbol (oder Icon) anzuzeigen.

### Werte

Das `enterkeyhint`-Attribut ist ein {{Glossary("Enumerated", "aufzählbares")}} Attribut und akzeptiert nur die folgenden Werte:

<table class="no-markdown">
  <thead>
    <tr>
      <th>Wert</th>
      <th>Beschreibung</th>
      <th>Beispiel-Label (abhängig vom Benutzeragent und der Benutzersprache)</th>
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
      <td>Typischerweise bedeutet es, den Benutzer zum Ziel des eingegebenen Textes zu bringen.</td>
      <td><kbd>go</kbd>, <kbd>🡢</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="next"</code></td>
      <td>Typischerweise den Benutzer zum nächsten Feld zu bringen, das Text akzeptiert.</td>
      <td><kbd>next</kbd>, <kbd>⇥</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="previous"</code></td>
      <td>Typischerweise den Benutzer zum vorherigen Feld zu bringen, das Text akzeptiert.</td>
      <td><kbd>return</kbd>, <kbd>⇤</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="search"</code></td>
      <td>Typischerweise den Benutzer zu den Suchergebnissen des eingegebenen Textes zu bringen.</td>
      <td><kbd>search</kbd>, <kbd>🔍</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="send"</code></td>
      <td>Typischerweise den Text an sein Ziel zu übermitteln.</td>
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
  [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) Attribute auf
  [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Elementen
