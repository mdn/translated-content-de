---
title: enterkeyhint
slug: Web/HTML/Global_attributes/enterkeyhint
l10n:
  sourceCommit: ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{HTMLSidebar("Global_attributes")}}

Das **`enterkeyhint`** [globale Attribut](/de/docs/Web/HTML/Global_attributes)
ist ein [enumeriertes](/de/docs/Glossary/Enumerated) Attribut, das festlegt, welches Aktionslabel (oder Symbol) für die Eingabetaste auf virtuellen Tastaturen angezeigt werden soll.

{{EmbedInteractiveExample("pages/tabbed/attribute-enterkeyhint.html","tabbed-shorter")}}

## Beschreibung

[Formularsteuerungen](/de/docs/Learn/Forms) (wie [`<textarea>`](/de/docs/Web/HTML/Element/textarea)
oder [`<input>`](/de/docs/Web/HTML/Element/input) Elemente) oder Elemente, die
[`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) verwenden, können ein
[`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode) Attribut spezifizieren, um zu kontrollieren, welche Art von virtueller Tastatur verwendet wird. Um das Nutzererlebnis weiter zu verbessern, kann die Eingabetaste durch Angabe eines `enterkeyhint`-Attributs speziell angepasst werden, das angibt, wie die Eingabetaste beschriftet werden soll (oder welches Symbol angezeigt werden soll). Die Eingabetaste repräsentiert in der Regel, was der Nutzer als nächstes tun soll; typische Aktionen sind: Text senden, eine neue Zeile einfügen oder suchen.

Wenn kein `enterkeyhint`-Attribut angegeben wird, kann der User-Agent kontextuelle Informationen von den
[`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode),
[`type`](/de/docs/Web/HTML/Element/input#input_types),
oder [`pattern`](/de/docs/Web/HTML/Element/input#pattern)
Attributen verwenden, um ein geeignetes Eingabetasten-Label (oder Symbol) anzuzeigen.

### Werte

Das `enterkeyhint`-Attribut ist ein [enumeriertes](/de/docs/Glossary/Enumerated) Attribut und akzeptiert nur die folgenden Werte:

<table class="no-markdown">
  <thead>
    <tr>
      <th>Wert</th>
      <th>Beschreibung</th>
      <th>Beispielhafte Beschriftung (abhängig vom User-Agent und der Sprache des Nutzers)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>enterkeyhint="enter"</code></td>
      <td>Normalerweise wird eine neue Zeile eingefügt.</td>
      <td><kbd>↵</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="done"</code></td>
      <td>
        Bedeutet normalerweise, dass nichts mehr eingegeben werden muss und der Eingabemethoden-Editor (IME) geschlossen wird.
      </td>
      <td><kbd>Fertig</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="go"</code></td>
      <td>
        Bedeutet normalerweise, den Nutzer zum Ziel des eingegebenen Textes zu bringen.
      </td>
      <td><kbd>Öffnen</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="next"</code></td>
      <td>
        Führt den Nutzer normalerweise zum nächsten Feld, das Text akzeptiert.
      </td>
      <td><kbd>Nächste</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="previous"</code></td>
      <td>
        Führt den Nutzer normalerweise zum vorherigen Feld, das Text akzeptiert.
      </td>
      <td><kbd>Vorherige</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="search"</code></td>
      <td>
        Führt den Nutzer normalerweise zu den Ergebnissen der Suche nach dem eingegebenen Text.
      </td>
      <td><kbd>Suchen</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="send"</code></td>
      <td>Sendet normalerweise den Text an sein Ziel.</td>
      <td><kbd>Senden</kbd></td>
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
- [`type`](/de/docs/Web/HTML/Element/input#input_types) und
  [`pattern`](/de/docs/Web/HTML/Element/input#pattern) Attribute auf
  [`<input>`](/de/docs/Web/HTML/Element/input) Elemente
