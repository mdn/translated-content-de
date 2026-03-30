---
title: HTML-Attribut accesskey (global)
short-title: accesskey
slug: Web/HTML/Reference/Global_attributes/accesskey
l10n:
  sourceCommit: 1696e3eadd2b142341a65a1cf6e9a4f3416412d1
---

Das globale **`accesskey`**-[Attribut](/de/docs/Web/HTML/Reference/Global_attributes) gibt einen Hinweis zur Erstellung einer Tastenkombination für das aktuelle Element. Der Attributwert muss aus einem einzelnen druckbaren Zeichen bestehen (dies schließt Akzentzeichen und andere Zeichen ein, die von der Tastatur erzeugt werden können).

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

Die Aktivierung der `accesskey`-Tastenkombination hängt vom Browser und seinem Plattform ab:

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
      <td><kbd>Alt</kbd> + <kbd><em>key</em></kbd></td>
      <td><kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd><em>key</em></kbd></td>
      <td><kbd>Control</kbd> + <kbd>Alt</kbd> + <kbd><em>key</em></kbd></td>
    </tr>
  </tbody>
</table>

## Barrierefreiheitsbedenken

Es gibt zahlreiche Bedenken bezüglich des `accesskey`-Attributs:

- Ein `accesskey`-Wert kann mit einem Tastenkürzel des Systems oder Browsers oder der Funktionalität assistiver Technologien in Konflikt geraten. Was für eine Kombination aus Betriebssystem, assistiver Technologie und Browser funktioniert, funktioniert möglicherweise nicht mit anderen Kombinationen.
- Bestimmte `accesskey`-Werte sind möglicherweise nicht auf bestimmten Tastaturen vorhanden, insbesondere wenn Internationalisierung eine Rolle spielt. Die Anpassung an spezifische Sprachen könnte daher weitere Probleme verursachen.
- `accesskey`-Werte, die auf Zahlen basieren, können für Personen mit kognitiven Einschränkungen verwirrend sein, bei denen die Zahl keine logische Verbindung zur Funktionalität hat, die sie auslöst.
- Den Benutzer darüber zu informieren, dass `accesskey`s vorhanden sind, damit er über die Funktionalität informiert ist. Wenn dem System eine Methode fehlt, den Benutzer über diese Funktion zu informieren, könnte der Benutzer `accesskey`s versehentlich aktivieren.

Aufgrund dieser Probleme wird im Allgemeinen empfohlen, auf den Einsatz von `accesskey`s für die meisten allgemeinen Webseiten und Web-Apps zu verzichten.

- [WebAIM: Tastatur-Zugänglichkeit - Accesskey](https://webaim.org/techniques/keyboard/accesskey#spec)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.accessKey`](/de/docs/Web/API/HTMLElement/accessKey)
- [`HTMLElement.accessKeyLabel`](/de/docs/Web/API/HTMLElement/accessKeyLabel)
- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`aria-keyshortcuts`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-keyshortcuts)
