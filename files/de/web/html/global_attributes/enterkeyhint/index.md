---
title: enterkeyhint
slug: Web/HTML/Global_attributes/enterkeyhint
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar("Global_attributes")}}

Das **`enterkeyhint`** [globale Attribut](/de/docs/Web/HTML/Global_attributes)
ist ein {{Glossary("Enumerated", "aufzählbares")}} Attribut, das definiert, welches Aktionslabel (oder Symbol) für die Enter-Taste auf virtuellen Tastaturen präsentiert werden soll.

{{InteractiveExample("HTML Demo: enterkeyhint", "tabbed-shorter")}}

```html interactive-example
<input enterkeyhint="go" />

<p contenteditable enterkeyhint="go">https://example.org</p>
```

## Beschreibung

[Formularsteuerelemente](/de/docs/Learn_web_development/Extensions/Forms) (wie [`<textarea>`](/de/docs/Web/HTML/Element/textarea)
oder [`<input>`](/de/docs/Web/HTML/Element/input)-Elemente) oder Elemente, die
[`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) verwenden, können ein
[`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode)-Attribut angeben, um zu steuern, welche Art von virtueller Tastatur
verwendet wird. Um die Benutzererfahrung weiter zu verbessern, kann die Enter-Taste speziell durch Bereitstellung des Attributs `enterkeyhint`
angepasst werden, das angibt, wie die Enter-Taste beschriftet werden soll (oder welches Symbol angezeigt werden soll). Die Enter-Taste repräsentiert normalerweise, was der Benutzer als nächstes tun soll; typische Aktionen sind: Text senden, eine neue Zeile einfügen oder suchen.

Wenn kein `enterkeyhint`-Attribut angegeben wird, kann die Benutzer-Agent Kontextinformationen aus den Attributen
[`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode),
[`type`](/de/docs/Web/HTML/Element/input#input_types)
oder [`pattern`](/de/docs/Web/HTML/Element/input#pattern) verwenden, um ein geeignetes Enter-Taste-Label (oder Symbol) anzuzeigen.

### Werte

Das `enterkeyhint`-Attribut ist ein {{Glossary("Enumerated", "aufzählbares")}} Attribut und akzeptiert nur die folgenden Werte:

<table class="no-markdown">
  <thead>
    <tr>
      <th>Wert</th>
      <th>Beschreibung</th>
      <th>Beispiel-Label (abhängig vom Benutzer-Agent und der Benutzersprache)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>enterkeyhint="enter"</code></td>
      <td>Normalerweise das Einfügen einer neuen Zeile.</td>
      <td><kbd>return</kbd>, <kbd>↵</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="done"</code></td>
      <td>Bedeutet in der Regel, dass es nichts mehr einzugeben gibt und der Eingabemethoden-Editor (IME) geschlossen wird.</td>
      <td><kbd>done</kbd>, <kbd>✅</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="go"</code></td>
      <td>Bedeutet in der Regel, den Benutzer zum Ziel des eingegebenen Textes zu führen.</td>
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
      <td>Normalerweise, um den Benutzer zu den Ergebnissen der Suche nach dem eingegebenen Text zu führen.</td>
      <td><kbd>search</kbd>, <kbd>🔍</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="send"</code></td>
      <td>Normalerweise, um den Text an sein Ziel zu liefern.</td>
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
- [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode) globales Attribut
- [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) globales Attribut
- [`type`](/de/docs/Web/HTML/Element/input#input_types) und
  [`pattern`](/de/docs/Web/HTML/Element/input#pattern) Attribute auf
  [`<input>`](/de/docs/Web/HTML/Element/input)-Elementen
