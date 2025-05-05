---
title: Anleitung zum Deaktivieren der Formular-Autovervollständigung
slug: Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion
l10n:
  sourceCommit: ade8d870ed7e18a71dc51fe25aa13d812fb82558
---

Dieser Artikel erklärt, wie man die Autovervollständigungsfunktion für Formularfelder auf einer Website deaktiviert.

## Verständnis von Autovervollständigung und automatischem Ausfüllen

Standardmäßig merken sich Browser Informationen, die der Benutzer über {{HTMLElement("input")}}-Felder auf Websites eingibt. Dies ermöglicht es den Browsern, Autovervollständigung (das heißt, Vorschläge für mögliche Eingaben zu machen, sobald der Benutzer begonnen hat, in das Feld zu tippen) oder automatisches Ausfüllen (das heißt, bestimmte Felder beim Laden der Seite vorab zu füllen) anzubieten.

Diese Funktionen sind normalerweise standardmäßig aktiviert, können jedoch für Benutzer ein Datenschutzproblem darstellen, weshalb Browser den Benutzern die Möglichkeit bieten, sie zu deaktivieren. Allerdings sind einige Daten, die in Formularen eingereicht werden, über die aktuelle Interaktion hinaus entweder nicht nützlich (zum Beispiel ein Einmal-PIN) oder enthalten sensible Informationen (zum Beispiel eine eindeutige Regierungskennung oder der Sicherheitscode einer Kreditkarte). Als Autor der Website ziehen Sie es möglicherweise vor, dass der Browser sich die Werte für solche Felder nicht merkt, selbst wenn die Autovervollständigungsfunktion des Browsers aktiviert ist.

> **Hinweis:** [WCAG 2.1 Erfolgskriterium 1.3.5: Identifizieren des Zweckes von Eingaben](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html) erfordert nicht, dass die Funktionen Autovervollständigung oder automatisches Ausfüllen funktionieren; es wird nur verlangt, dass Formularfelder, die sich auf spezifische persönliche Benutzerinformationen beziehen, programmatisch identifiziert werden. Dies bedeutet, dass das Kriterium noch erfüllt werden kann (durch Hinzufügen der relevanten [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attribute zu einzelnen Formularfeldern), auch wenn die Autovervollständigung für das Formular selbst deaktiviert wurde.

## Deaktivierung der Autovervollständigung

Um die Autovervollständigung in Formularen zu deaktivieren, können Sie das [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attribut auf `"off"` setzen:

```plain
autocomplete="off"
```

Dies kann entweder für ein ganzes Formular oder für spezifische Eingabeelemente in einem Formular geschehen:

```html-nolint
<form method="post" action="/form" autocomplete="off">
  …
</form>
```

```html
<form method="post" action="/form">
  …
  <div>
    <label for="cc">Credit card:</label>
    <input type="text" id="cc" name="cc" autocomplete="off" />
  </div>
</form>
```

Das Setzen von `autocomplete="off"` auf Feldern hat zwei Effekte:

- Es weist den Browser an, die vom Benutzer eingegebenen Daten nicht für eine spätere Autovervollständigung bei ähnlichen Formularen zu speichern (einige Browser machen Ausnahmen für besondere Fälle, wie zum Beispiel die Aufforderung, Passwörter zu speichern).
- Es verhindert, dass der Browser Formulardaten im Sitzungsspeicher zwischenspeichert. Wenn Formulardaten im Sitzungsspeicher zwischengespeichert werden, werden die vom Benutzer ausgefüllten Informationen angezeigt, falls der Benutzer das Formular eingereicht hat und die Zurück-Taste drückt, um zur ursprünglichen Formularseite zurückzukehren.

Wenn ein Browser weiterhin Vorschläge macht, selbst nachdem die Autovervollständigung ausgeschaltet wurde, müssen Sie das `name`-Attribut des `<input>`-Elements ändern.

## Verwaltung des automatischen Ausfüllens für Anmeldefelder

Moderne Browser implementieren integrierte Passwortverwaltung: Wenn der Benutzer einen Benutzernamen und ein Passwort für eine Seite eingibt, bietet der Browser an, dies für den Benutzer zu speichern. Wenn der Benutzer die Seite erneut besucht, füllt der Browser die Anmeldefelder mit den gespeicherten Werten automatisch aus.

Zusätzlich ermöglicht der Browser dem Benutzer, ein Hauptkennwort auszuwählen, das der Browser zur Verschlüsselung der gespeicherten Anmeldedetails verwenden wird.

Auch ohne ein Hauptkennwort wird die Passwortverwaltung im Browser allgemein als Sicherheitsgewinn angesehen. Da Benutzer sich keine Passwörter merken müssen, die der Browser für sie speichert, können sie stärkere Passwörter wählen, als sie es sonst tun würden.

Aus diesem Grund unterstützen viele moderne Browser `autocomplete="off"` für Anmeldefelder nicht:

- Wenn eine Seite `autocomplete="off"` auf einem {{HTMLElement("form")}}-Element setzt und das Formular Eingabefelder für Benutzernamen und Passwort enthält, wird der Browser dennoch anbieten, sich diese Anmeldung zu merken. Wenn der Benutzer zustimmt, füllt der Browser diese Felder bei einem erneuten Besuch der Seite automatisch aus.
- Wenn eine Seite `autocomplete="off"` für Benutzernamen- und Passwort-{{HTMLElement("input")}}-Felder setzt, wird der Browser dennoch anbieten, sich diese Anmeldung zu merken. Wenn der Benutzer zustimmt, füllt der Browser diese Felder bei einem erneuten Besuch der Seite automatisch aus.

Wenn Sie eine Benutzermanagementseite definieren, auf der ein Benutzer ein neues Passwort für eine andere Person festlegen kann, und daher das automatische Ausfüllen von Passwortfeldern verhindern möchten, können Sie `autocomplete="new-password"` verwenden.

Dieses Attribut ist ein Hinweis für Browser; einige beachten es möglicherweise nicht.
