---
title: enterkeyhint
slug: Web/HTML/Global_attributes/enterkeyhint
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar("Global_attributes")}}

Das **`enterkeyhint`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein {{Glossary("Enumerated", "enumeriertes")}} Attribut, das definiert, welches Aktionslabel (oder Symbol) für die Enter-Taste auf virtuellen Tastaturen angezeigt werden soll.

{{EmbedInteractiveExample("pages/tabbed/attribute-enterkeyhint.html","tabbed-shorter")}}

## Beschreibung

[Formularsteuerelemente](/de/docs/Learn_web_development/Extensions/Forms) (wie [`<textarea>`](/de/docs/Web/HTML/Element/textarea) oder [`<input>`](/de/docs/Web/HTML/Element/input) Elemente) oder Elemente, die [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) verwenden, können ein [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode) Attribut angeben, um zu steuern, welche Art von virtueller Tastatur verwendet wird. Um die Benutzererfahrung weiter zu verbessern, kann die Enter-Taste speziell angepasst werden, indem ein `enterkeyhint` Attribut angegeben wird, das angibt, wie die Enter-Taste beschriftet werden soll (oder welches Symbol angezeigt werden soll). Die Enter-Taste repräsentiert normalerweise, was der Benutzer als nächstes tun sollte; typische Aktionen sind: Text senden, eine neue Zeile einfügen oder suchen.

Wenn kein `enterkeyhint` Attribut angegeben ist, kann der Benutzeragent kontextuelle Informationen aus den [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode), [`type`](/de/docs/Web/HTML/Element/input#input_types) oder [`pattern`](/de/docs/Web/HTML/Element/input#pattern) Attributen verwenden, um ein geeignetes Enter-Tasten-Label (oder Symbol) anzuzeigen.

### Werte

Das `enterkeyhint` Attribut ist ein {{Glossary("Enumerated", "enumeriertes")}} Attribut und akzeptiert nur die folgenden Werte:

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
      <td>Typischerweise bedeutet dies, dass nichts mehr einzugeben ist und der Eingabemethoden-Editor (IME) geschlossen wird.</td>
      <td><kbd>done</kbd>, <kbd>✅</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="go"</code></td>
      <td>Typischerweise bedeutet dies, den Benutzer zum Ziel des eingegebenen Textes zu führen.</td>
      <td><kbd>go</kbd>, <kbd>🡢</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="next"</code></td>
      <td>Typischerweise den Benutzer zum nächsten Feld führen, das Text akzeptiert.</td>
      <td><kbd>next</kbd>, <kbd>⇥</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="previous"</code></td>
      <td>Typischerweise den Benutzer zum vorherigen Feld führen, das Text akzeptiert.</td>
      <td><kbd>return</kbd>, <kbd>⇤</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="search"</code></td>
      <td>Typischerweise den Benutzer zu den Ergebnissen der Suche nach dem eingegebenen Text führen.</td>
      <td><kbd>search</kbd>, <kbd>🔍</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="send"</code></td>
      <td>Typischerweise den Text an sein Ziel übermitteln.</td>
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
- [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode) globales Attribut
- [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) globales Attribut
- [`type`](/de/docs/Web/HTML/Element/input#input_types) und [`pattern`](/de/docs/Web/HTML/Element/input#pattern) Attribute auf [`<input>`](/de/docs/Web/HTML/Element/input) Elementen
