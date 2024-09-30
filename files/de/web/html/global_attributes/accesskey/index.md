---
title: accesskey
slug: Web/HTML/Global_attributes/accesskey
l10n:
  sourceCommit: 7ee907e1602305c3b103c12a31185585c464000c
---

{{HTMLSidebar("Global_attributes")}}

Das **`accesskey`**-[globale Attribut](/de/docs/Web/HTML/Global_attributes) gibt einen Hinweis zur Generierung einer Tastenkombination für das aktuelle Element. Der Attributwert muss aus einem einzelnen druckbaren Zeichen bestehen (einschließlich akzentuierter und anderer Zeichen, die mit der Tastatur erzeugt werden können).

{{EmbedInteractiveExample("pages/tabbed/attribute-accesskey.html","tabbed-shorter")}}

Die Art und Weise, wie die `accesskey`-Tastenkombination aktiviert wird, hängt vom Browser und dessen Plattform ab:

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
      <td colspan="2">n/v</td>
      <td><kbd>Control</kbd> + <kbd>Option</kbd> + <kbd><em>key</em></kbd></td>
    </tr>
    <tr>
      <th>Opera</th>
      <td colspan="2"><kbd>Alt</kbd> + <kbd><em>key</em></kbd></td>
      <td><kbd>Control</kbd> + <kbd>Alt</kbd> + <kbd><em>key</em></kbd></td>
    </tr>
  </tbody>
</table>

## Barrierefreiheitsbedenken

Es gibt zahlreiche Bedenken hinsichtlich des `accesskey`-Attributs:

- Ein `accesskey`-Wert kann mit einer System- oder Browser-Tastenkombination oder mit Funktionalitäten von unterstützenden Technologien in Konflikt geraten. Was für eine Kombination aus Betriebssystem, unterstützender Technologie und Browser funktioniert, kann bei anderen Kombinationen nicht funktionieren.
- Bestimmte `accesskey`-Werte sind möglicherweise auf bestimmten Tastaturen nicht vorhanden, insbesondere wenn Internationalisierung ein Thema ist. Die Anpassung an spezifische Sprachen könnte daher weitere Probleme verursachen.
- `accesskey`-Werte, die auf Zahlen basieren, können für Personen mit kognitiven Einschränkungen verwirrend sein, wenn die Zahl keine logische Verbindung zu der ausgelösten Funktion hat.
- Den Benutzer darüber informieren, dass `accesskey`s vorhanden sind, damit er sich der Funktionalität bewusst ist. Wenn das System keine Methode zur Benachrichtigung des Benutzers über dieses Feature bietet, könnte der Benutzer versehentlich `accesskey`s aktivieren.

Aufgrund dieser Probleme wird generell davon abgeraten, `accesskey`s für die meisten allgemein zugänglichen Websites und Webanwendungen zu verwenden.

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
