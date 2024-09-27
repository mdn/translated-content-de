---
title: accesskey
slug: Web/HTML/Global_attributes/accesskey
l10n:
  sourceCommit: 7ee907e1602305c3b103c12a31185585c464000c
---

{{HTMLSidebar("Global_attributes")}}

Das **`accesskey`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) liefert einen Hinweis zum Erstellen einer Tastenkombination für das aktuelle Element. Der Attributwert muss aus einem einzelnen druckbaren Zeichen bestehen (einschließlich Akzentzeichen und anderer Zeichen, die von der Tastatur erzeugt werden können).

{{EmbedInteractiveExample("pages/tabbed/attribute-accesskey.html","tabbed-shorter")}}

Die Art und Weise, wie der accesskey aktiviert wird, hängt vom Browser und der Plattform ab:

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

Es gibt zahlreiche Bedenken hinsichtlich des `accesskey`-Attributs:

- Ein `accesskey`-Wert kann mit einer System- oder Browser-Tastenkombination oder der Funktionalität unterstützender Technologien in Konflikt geraten. Was für eine Kombination aus Betriebssystem, unterstützender Technologie und Browser funktioniert, mag bei anderen Kombinationen nicht funktionieren.
- Bestimmte `accesskey`-Werte sind möglicherweise nicht auf bestimmten Tastaturen vorhanden, insbesondere wenn die Internationalisierung ein Faktor ist. Das Anpassen an bestimmte Sprachen könnte daher weitere Probleme verursachen.
- `accesskey`-Werte, die auf Zahlen basieren, können für Personen mit kognitiven Beeinträchtigungen verwirrend sein, wenn die Zahl keine logische Verbindung zu der durch sie ausgelösten Funktionalität hat.
- Den Benutzer darüber informieren, dass `accesskey`s vorhanden sind, damit er sich der Funktionalität bewusst ist. Wenn dem System eine Methode zur Benachrichtigung des Benutzers über diese Funktion fehlt, könnte der Benutzer versehentlich `accesskey`s aktivieren.

Aufgrund dieser Probleme wird im Allgemeinen empfohlen, `accesskey`s für die meisten allgemeinen Websites und Webanwendungen nicht zu verwenden.

- [WebAIM: Tastaturzugänglichkeit - Accesskey](https://webaim.org/techniques/keyboard/accesskey#spec)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.accessKey`](/de/docs/Web/API/HTMLElement/accessKey)
- [`HTMLElement.accessKeyLabel`](/de/docs/Web/API/HTMLElement/accessKeyLabel)
- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
- [`aria-keyshortcuts`](https://www.w3.org/TR/wai-aria-1.1/#aria-keyshortcuts)
