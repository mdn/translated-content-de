---
title: enterkeyhint
slug: Web/HTML/Global_attributes/enterkeyhint
l10n:
  sourceCommit: 14d5d881321941bb38db13646b1857ece7ae2c5a
---

{{HTMLSidebar("Global_attributes")}}

Das **`enterkeyhint`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein {{Glossary("Enumerated", "enumeriertes")}} Attribut, das definiert, welches Aktionslabel (oder welches Icon) für die Eingabetaste auf virtuellen Tastaturen angezeigt werden soll.

{{EmbedInteractiveExample("pages/tabbed/attribute-enterkeyhint.html","tabbed-shorter")}}

## Beschreibung

[Formularelemente](/de/docs/Learn/Forms) (wie zum Beispiel [`<textarea>`](/de/docs/Web/HTML/Element/textarea) oder [`<input>`](/de/docs/Web/HTML/Element/input) Elemente) oder Elemente, die [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) verwenden, können ein [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode) Attribut spezifizieren, um zu steuern, welche Art von virtueller Tastatur verwendet wird. Um die Erfahrung der Benutzer weiter zu verbessern, kann die Eingabetaste speziell angepasst werden, indem ein `enterkeyhint` Attribut bereitgestellt wird, das angibt, wie die Eingabetaste beschriftet werden soll (oder welches Icon angezeigt werden soll). Die Eingabetaste repräsentiert in der Regel, was der Benutzer als nächstes tun sollte; typische Aktionen sind: Text senden, eine neue Zeile einfügen oder suchen.

Wenn kein `enterkeyhint` Attribut bereitgestellt wird, könnte der Benutzeragent kontextuelle Informationen aus den [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode), [`type`](/de/docs/Web/HTML/Element/input#input_types) oder [`pattern`](/de/docs/Web/HTML/Element/input#pattern) Attributen verwenden, um ein geeignetes Label (oder Icon) für die Eingabetaste anzuzeigen.

### Werte

Das `enterkeyhint` Attribut ist ein {{Glossary("Enumerated", "enumeriertes")}} Attribut und akzeptiert nur die folgenden Werte:

<table class="no-markdown">
  <thead>
    <tr>
      <th>Wert</th>
      <th>Beschreibung</th>
      <th>Beispiel-Label (abhängig vom Benutzeragenten und der Benutzersprache)</th>
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
      <td>Typischerweise den Benutzer zu den Ergebnissen der Suche nach dem eingegebenen Text zu bringen.</td>
      <td><kbd>search</kbd>, <kbd>🔍</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="send"</code></td>
      <td>Typischerweise das Übermitteln des Textes an das Ziel.</td>
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
