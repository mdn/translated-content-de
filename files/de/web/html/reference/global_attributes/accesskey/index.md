---
title: accesskey
slug: Web/HTML/Reference/Global_attributes/accesskey
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar("Global_attributes")}}

Das **`accesskey`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) bietet einen Hinweis zur Erzeugung einer Tastenkombination für das aktuelle Element. Der Attributwert muss aus einem einzelnen druckbaren Zeichen bestehen (einschließlich Akzenten und anderen Zeichen, die über die Tastatur erzeugt werden können).

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

Die Art und Weise, wie der `accesskey` aktiviert wird, hängt vom Browser und dessen Plattform ab:

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
      <td colspan="2"><kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd><em>key</em></kbd></td>
      <td>
        <kbd>Control</kbd> + <kbd>Option</kbd> +
        <kbd><em>key</em></kbd> oder <kbd>Control</kbd> + <kbd>Alt</kbd> +
        <kbd><em>key</em></kbd>
      </td>
    </tr>
    <tr>
      <th>MS Edge</th>
      <td rowspan="2"><kbd>Alt</kbd> + <kbd><em>key</em></kbd></td>
      <td rowspan="2">
        <kbd>Control</kbd> + <kbd>Option</kbd> + <kbd><em>key</em></kbd><br>oder <kbd>Control</kbd> + <kbd>Option</kbd> + <kbd>Shift</kbd> +
        <kbd><em>key</em></kbd>
      </td>
      <td rowspan="2"><kbd>Control</kbd> + <kbd>Option</kbd> + <kbd><em>key</em></kbd></td>
    </tr>
    <tr>
      <th>Google Chrome</th>
    </tr>
    <tr>
      <th>Safari</th>
      <td colspan="2">n/a</td>
      <td><kbd>Control</kbd> + <kbd>Option</kbd> + <kbd><em>key</em></kbd></td>
    </tr>
    <tr>
      <th>Opera</th>
      <td colspan="2"><kbd>Alt</kbd> + <kbd><em>key</em></kbd></td>
      <td><kbd>Control</kbd> + <kbd>Alt</kbd> + <kbd><em>key</em></kbd></td>
    </tr>
  </tbody>
</table>

## Barrierefreiheit

Es gibt zahlreiche Bedenken bezüglich des `accesskey`-Attributs:

- Ein `accesskey`-Wert kann mit einer System- oder Browser-Tastenkombination oder mit der Funktionalität von unterstützender Technologie in Konflikt stehen. Was für eine Kombination aus Betriebssystem, unterstützender Technologie und Browser funktioniert, mag für andere Kombinationen nicht funktionieren.
- Bestimmte `accesskey`-Werte sind möglicherweise auf bestimmten Tastaturen nicht vorhanden, insbesondere wenn die Internationalisierung relevant ist. Die Anpassung an spezifische Sprachen könnte also weitere Probleme verursachen.
- `accesskey`-Werte, die auf Zahlen beruhen, könnten für Personen mit kognitiven Einschränkungen verwirrend sein, wenn die Zahl keine logische Verbindung zu der Funktion hat, die sie auslöst.
- Es muss sichergestellt werden, dass die Benutzer wissen, dass `accesskey`s vorhanden sind, damit sie über die Funktionalität informiert sind. Wenn das System über keine Methode verfügt, den Benutzer über diese Funktion zu informieren, könnte der Benutzer `accesskey`s versehentlich aktivieren.

Aufgrund dieser Probleme wird im Allgemeinen davon abgeraten, `accesskey`s für die meisten allgemeinen Websites und Web-Apps zu verwenden.

- [WebAIM: Tastaturzugänglichkeit - Accesskey](https://webaim.org/techniques/keyboard/accesskey#spec)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.accessKey`](/de/docs/Web/API/HTMLElement/accessKey)
- [`HTMLElement.accessKeyLabel`](/de/docs/Web/API/HTMLElement/accessKeyLabel)
- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`aria-keyshortcuts`](https://www.w3.org/TR/wai-aria-1.1/#aria-keyshortcuts)
