---
title: HTML accesskey globales Attribut
short-title: accesskey
slug: Web/HTML/Reference/Global_attributes/accesskey
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`accesskey`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) bietet einen Hinweis zur Erstellung einer Tastenkombination für das aktuelle Element. Der Attributwert muss aus einem druckbaren Zeichen bestehen (einschließlich akzentuierter und anderer Zeichen, die über die Tastatur erzeugt werden können).

{{InteractiveExample("HTML Demo: accesskey", "tabbed-shorter")}}

```html interactive-example
<p>If you need to relax, press the <b>S</b>tress reliever!</p>
<button accesskey="s">Stress reliever</button>
```

```css interactive-example
b {
  text-decoration: underline;
}
```

Die Methode zur Aktivierung des `accesskey` hängt vom Browser und dessen Plattform ab:

<table class="standard-table">
  <tbody>
    <tr>
      <th></th>
      <th>Windows</th>
      <th>Linux</th>
      <th>Mac</th>
    </tr>
    <tr>
      <th>Firefox</th>
      <td colspan="2"><kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd><em>Taste</em></kbd></td>
      <td>
        <kbd>Control</kbd> + <kbd>Option</kbd> +
        <kbd><em>Taste</em></kbd> oder <kbd>Control</kbd> + <kbd>Alt</kbd> +
        <kbd><em>Taste</em></kbd>
      </td>
    </tr>
    <tr>
      <th>MS Edge</th>
      <td rowspan="2"><kbd>Alt</kbd> + <kbd><em>Taste</em></kbd></td>
      <td rowspan="2">
        <kbd>Control</kbd> + <kbd>Option</kbd> + <kbd><em>Taste</em></kbd><br>oder <kbd>Control</kbd> + <kbd>Option</kbd> + <kbd>Shift</kbd> +
        <kbd><em>Taste</em></kbd>
      </td>
      <td rowspan="2"><kbd>Control</kbd> + <kbd>Option</kbd> + <kbd><em>Taste</em></kbd></td>
    </tr>
    <tr>
      <th>Google Chrome</th>
    </tr>
    <tr>
      <th>Safari</th>
      <td colspan="2">n/v</td>
      <td><kbd>Control</kbd> + <kbd>Option</kbd> + <kbd><em>Taste</em></kbd></td>
    </tr>
    <tr>
      <th>Opera</th>
      <td colspan="2"><kbd>Alt</kbd> + <kbd><em>Taste</em></kbd></td>
      <td><kbd>Control</kbd> + <kbd>Alt</kbd> + <kbd><em>Taste</em></kbd></td>
    </tr>
  </tbody>
</table>

## Barrierefreiheitsbedenken

Es gibt zahlreiche Bedenken bezüglich des `accesskey`-Attributs:

- Ein `accesskey`-Wert kann mit einer System- oder Browser-Tastenkombination oder Funktionen unterstützender Technologien in Konflikt stehen. Was für eine Kombination aus Betriebssystem, unterstützender Technologie und Browser funktioniert, kann mit anderen Kombinationen nicht funktionieren.
- Bestimmte `accesskey`-Werte sind möglicherweise auf bestimmten Tastaturen nicht vorhanden, insbesondere wenn die Internationalisierung eine Rolle spielt. Die Anpassung an spezifische Sprachen könnte weitere Probleme verursachen.
- `accesskey`-Werte, die auf Zahlen beruhen, können für Personen mit kognitiven Einschränkungen verwirrend sein, da die Zahl nicht logisch mit der Funktionalität assoziiert ist, die sie auslöst.
- Es muss sichergestellt werden, dass der Benutzer darüber informiert wird, dass `accesskey`s vorhanden sind, damit er sich der Funktionalität bewusst ist. Wenn das System keine Methode zur Benachrichtigung des Benutzers über diese Funktion bietet, könnten `accesskey`s versehentlich aktiviert werden.

Aufgrund dieser Probleme wird im Allgemeinen davon abgeraten, `accesskey`s für die meisten allgemeingültigen Websites und Webanwendungen zu verwenden.

- [WebAIM: Tastaturzugänglichkeit - Accesskey](https://webaim.org/techniques/keyboard/accesskey#spec)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.accessKey`](/de/docs/Web/API/HTMLElement/accessKey)
- [`HTMLElement.accessKeyLabel`](/de/docs/Web/API/HTMLElement/accessKeyLabel)
- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`aria-keyshortcuts`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-keyshortcuts)
