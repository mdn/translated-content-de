---
title: HTML accesskey Globales Attribut
short-title: accesskey
slug: Web/HTML/Reference/Global_attributes/accesskey
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{HTMLSidebar("Global_attributes")}}

Das **`accesskey`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) bietet einen Hinweis für die Erstellung einer Tastenkombination für das aktuelle Element. Der Attributwert muss aus einem einzelnen druckbaren Zeichen bestehen (einschließlich Akzentzeichen und anderer Zeichen, die über die Tastatur erzeugt werden können).

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

Der Weg, um das `accesskey` zu aktivieren, hängt vom Browser und dessen Plattform ab:

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
      <td colspan="2">n/a</td>
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

Es gibt zahlreiche Bedenken hinsichtlich des `accesskey`-Attributs:

- Ein `accesskey`-Wert kann mit einer System- oder Browser-Tastenkürzel oder der Funktionalität von assistierenden Technologien in Konflikt geraten. Was für eine Kombination aus Betriebssystem, assistierender Technologie und Browser funktioniert, kann bei anderen Kombinationen nicht funktionieren.
- Bestimmte `accesskey`-Werte sind möglicherweise auf bestimmten Tastaturen nicht vorhanden, besonders wenn die Internationalisierung ein Anliegen ist. Die Anpassung an bestimmte Sprachen könnte zusätzliche Probleme verursachen.
- `accesskey`-Werte, die von Zahlen abhängen, können für Personen mit kognitiven Beeinträchtigungen verwirrend sein, wenn die Zahl keine logische Verbindung zur ausgelösten Funktionalität hat.
- Informieren Sie den Benutzer darüber, dass `accesskey`s vorhanden sind, damit er sich der Funktionalität bewusst ist. Wenn das System keine Methode hat, den Benutzer über diese Funktion zu informieren, könnte der Benutzer versehentlich `accesskey`s aktivieren.

Aufgrund dieser Probleme wird allgemein davon abgeraten, `accesskey`s für die meisten allgemeinen Websites und Webanwendungen zu verwenden.

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
