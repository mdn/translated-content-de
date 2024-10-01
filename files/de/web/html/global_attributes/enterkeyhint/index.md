---
title: enterkeyhint
slug: Web/HTML/Global_attributes/enterkeyhint
l10n:
  sourceCommit: ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{HTMLSidebar("Global_attributes")}}

Das **`enterkeyhint`** [globale Attribut](/de/docs/Web/HTML/Global_attributes)
ist ein {{Glossary("Enumerated", "aufgezähltes")}} Attribut, das definiert, welches Aktionslabel (oder Symbol) für die Eingabetaste auf virtuellen Tastaturen angezeigt werden soll.

{{EmbedInteractiveExample("pages/tabbed/attribute-enterkeyhint.html","tabbed-shorter")}}

## Beschreibung

[Formularelemente](/de/docs/Learn/Forms) (wie beispielsweise [`<textarea>`](/de/docs/Web/HTML/Element/textarea)
oder [`<input>`](/de/docs/Web/HTML/Element/input)-Elemente) oder Elemente, die
[`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) verwenden, können ein
[`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode) Attribut spezifizieren, um zu steuern, welche Art von virtueller Tastatur verwendet wird. Um das Erlebnis für den Nutzer weiter zu verbessern, kann die Eingabetaste speziell angepasst werden, indem ein `enterkeyhint`-Attribut angegeben wird, das angibt, wie die Eingabetaste beschriftet sein soll (oder welches Symbol angezeigt werden soll). Die Eingabetaste steht normalerweise für die nächste Aktion, die der Nutzer durchführen soll; typische Aktionen sind das Senden von Text, das Einfügen einer neuen Zeile oder das Suchen.

Wenn kein `enterkeyhint`-Attribut bereitgestellt wird, kann der Benutzeragent kontextbezogene Informationen aus den
[`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode),
[`type`](/de/docs/Web/HTML/Element/input#input_types),
oder [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attributen verwenden, um ein geeignetes Eingabetasten-Label (oder Symbol) anzuzeigen.

### Werte

Das `enterkeyhint`-Attribut ist ein {{Glossary("Enumerated", "aufgezähltes")}} Attribut und akzeptiert nur die folgenden Werte:

<table class="no-markdown">
  <thead>
    <tr>
      <th>Wert</th>
      <th>Beschreibung</th>
      <th>Beispiel-Beschriftung (abhängig vom Benutzeragenten und der Benutzersprache)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>enterkeyhint="enter"</code></td>
      <td>Typischerweise um eine neue Zeile einzufügen.</td>
      <td><kbd>↵</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="done"</code></td>
      <td>
        Typischerweise bedeutet dies, dass nichts mehr eingegeben werden muss und der Eingabemethoden-Editor (IME) geschlossen wird.
      </td>
      <td><kbd>Fertig</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="go"</code></td>
      <td>
        Typischerweise bedeutet dies, den Benutzer zum Ziel des eingegebenen Textes zu bringen.
      </td>
      <td><kbd>Öffnen</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="next"</code></td>
      <td>
        Typischerweise führt dies den Benutzer zum nächsten Feld, das Text akzeptiert.
      </td>
      <td><kbd>Weiter</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="previous"</code></td>
      <td>
        Typischerweise führt dies den Benutzer zum vorherigen Feld, das Text akzeptiert.
      </td>
      <td><kbd>Zurück</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="search"</code></td>
      <td>
        Typischerweise führt dies den Benutzer zu den Ergebnissen der Suche nach dem eingegebenen Text.
      </td>
      <td><kbd>Suchen</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="send"</code></td>
      <td>Typischerweise wird der Text an sein Ziel gesendet.</td>
      <td><kbd>Senden</kbd></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.enterKeyHint`](/de/docs/Web/API/HTMLElement/enterKeyHint)-Eigenschaft, die dieses Attribut widerspiegelt
- [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode)-globales Attribut
- [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-globales Attribut
- [`type`](/de/docs/Web/HTML/Element/input#input_types) und
  [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribute bei
  [`<input>`](/de/docs/Web/HTML/Element/input)-Elementen
