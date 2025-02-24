---
title: accesskey
slug: Web/HTML/Global_attributes/accesskey
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar("Global_attributes")}}

Das **`accesskey`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) bietet einen Hinweis zum Erstellen einer Tastenkombination für das aktuelle Element. Der Attributwert muss aus einem einzelnen druckbaren Zeichen bestehen (einschließlich Akzent- und anderer Zeichen, die mit der Tastatur erzeugt werden können).

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

Die Methode zur Aktivierung des Accesskeys hängt vom Browser und dessen Plattform ab:

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

## Barrierefreiheitshinweise

Es gibt zahlreiche Bedenken hinsichtlich des `accesskey`-Attributs:

- Ein `accesskey`-Wert kann mit einer System- oder Browser-Tastenkombination oder einer Funktion der unterstützenden Technologie in Konflikt stehen. Was für eine Kombination aus Betriebssystem, unterstützender Technologie und Browser funktioniert, funktioniert möglicherweise nicht mit anderen Kombinationen.
- Bestimmte `accesskey`-Werte sind möglicherweise auf bestimmten Tastaturen nicht vorhanden, insbesondere wenn Internationalisierung von Bedeutung ist. Die Anpassung an spezifische Sprachen könnte daher zusätzliche Probleme verursachen.
- `accesskey`-Werte, die auf Zahlen beruhen, können für Personen mit kognitiven Einschränkungen verwirrend sein, da die Zahl keine logische Verbindung zur Funktionalität hat, die sie auslöst.
- Den Nutzer darüber informieren, dass `accesskey`s vorhanden sind, damit er sich der Funktionalität bewusst ist. Wenn das System keine Möglichkeit hat, den Nutzer über dieses Feature zu informieren, könnte der Nutzer versehentlich `accesskey`s aktivieren.

Aufgrund dieser Probleme wird generell empfohlen, `accesskey`s auf den meisten allgemeinen Websites und Web-Apps nicht zu verwenden.

- [WebAIM: Keyboard Accessibility - Accesskey](https://webaim.org/techniques/keyboard/accesskey#spec)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.accessKey`](/de/docs/Web/API/HTMLElement/accessKey)
- [`HTMLElement.accessKeyLabel`](/de/docs/Web/API/HTMLElement/accessKeyLabel)
- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
- [`aria-keyshortcuts`](https://www.w3.org/TR/wai-aria-1.1/#aria-keyshortcuts)
