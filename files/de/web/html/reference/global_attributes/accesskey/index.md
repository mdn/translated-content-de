---
title: HTML accesskey globales Attribut
short-title: accesskey
slug: Web/HTML/Reference/Global_attributes/accesskey
l10n:
  sourceCommit: 7885271e36e9d2744296c01f400653f63caa6f75
---

{{HTMLSidebar("Global_attributes")}}

Das **`accesskey`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) bietet einen Hinweis zur Generierung einer Tastenkombination für das aktuelle Element. Der Attributwert muss aus einem einzigen druckbaren Zeichen bestehen (dazu gehören Akzentzeichen und andere Zeichen, die über die Tastatur generiert werden können).

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

Die Art und Weise, wie die `accesskey`-Kombination aktiviert wird, hängt vom Browser und dessen Plattform ab:

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

## Barrierefreiheit Bedenken

Es gibt zahlreiche Bedenken im Zusammenhang mit dem `accesskey`-Attribut:

- Ein `accesskey`-Wert kann mit einer System- oder Browser-Tastenkombination oder der Funktionalität von unterstützenden Technologien in Konflikt stehen. Was für eine Kombination aus Betriebssystem, unterstützender Technologie und Browser funktioniert, funktioniert möglicherweise nicht mit anderen Kombinationen.
- Bestimmte `accesskey`-Werte sind möglicherweise nicht auf bestimmten Tastaturen vorhanden, insbesondere wenn die Internationalisierung eine Rolle spielt. Die Anpassung an spezifische Sprachen könnte daher weitere Probleme verursachen.
- `accesskey`-Werte, die auf Zahlen basieren, können für Personen mit kognitiven Bedenken verwirrend sein, da die Zahl keine logische Verbindung zu der von ihr ausgelösten Funktionalität hat.
- Den Benutzer darüber informieren, dass `accesskey`s vorhanden sind, damit sie sich der Funktionalität bewusst sind. Wenn dem System eine Methode fehlt, den Benutzer über diese Funktion zu informieren, könnte der Benutzer versehentlich `accesskey`s aktivieren.

Aufgrund dieser Probleme wird allgemein geraten, `accesskey`s nicht für die meisten allgemeingültigen Websites und Web-Apps zu verwenden.

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
