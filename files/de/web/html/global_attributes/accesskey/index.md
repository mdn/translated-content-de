---
title: accesskey
slug: Web/HTML/Global_attributes/accesskey
l10n:
  sourceCommit: 7ee907e1602305c3b103c12a31185585c464000c
---

{{HTMLSidebar("Global_attributes")}}

Das **`accesskey`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) gibt einen Hinweis zur Erstellung einer Tastenkombination für das aktuelle Element. Der Attributwert muss aus einem einzelnen druckbaren Zeichen bestehen (einschließlich akzentuierter und anderer Zeichen, die mit der Tastatur generiert werden können).

{{EmbedInteractiveExample("pages/tabbed/attribute-accesskey.html","tabbed-shorter")}}

Die Art und Weise, wie das accesskey aktiviert wird, hängt vom Browser und dessen Plattform ab:

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

## Barrierefreiheitsbedenken

Es gibt zahlreiche Bedenken im Zusammenhang mit dem `accesskey`-Attribut:

- Ein `accesskey`-Wert kann mit einer System- oder Browser-Tastenkombination oder der Funktionalität von unterstützenden Technologien in Konflikt geraten. Was für eine Kombination aus Betriebssystem, unterstützender Technologie und Browser funktioniert, funktioniert möglicherweise nicht mit anderen Kombinationen.
- Bestimmte `accesskey`-Werte sind auf bestimmten Tastaturen möglicherweise nicht vorhanden, insbesondere wenn die Internationalisierung eine Rolle spielt. Die Anpassung an bestimmte Sprachen könnte daher weitere Probleme verursachen.
- `accesskey`-Werte, die auf Zahlen basieren, können für Personen mit kognitiven Beeinträchtigungen verwirrend sein, da die Zahl keine logische Verbindung zu der Funktionalität hat, die sie auslöst.
- Den Benutzer über die Anwesenheit von `accesskey`s zu informieren, damit er sich der Funktionalität bewusst ist. Wenn das System keine Möglichkeit bietet, den Benutzer über diese Funktion zu informieren, könnte der Benutzer versehentlich `accesskey`s aktivieren.

Aufgrund dieser Probleme wird allgemein empfohlen, `accesskey`s für die meisten allgemein-zweckmäßigen Websites und Web-Apps nicht zu verwenden.

- [WebAIM: Keyboard Accessibility - Accesskey](https://webaim.org/techniques/keyboard/accesskey#spec)

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLElement.accessKey")}}
- {{domxref("HTMLElement.accessKeyLabel")}}
- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
- [`aria-keyshortcuts`](https://www.w3.org/TR/wai-aria-1.1/#aria-keyshortcuts)
