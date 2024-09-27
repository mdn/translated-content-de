---
title: So schalten Sie die Formular-Autovervollständigung aus
slug: Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion
l10n:
  sourceCommit: 75e254fe894a22724a3d01ef6b20b9848e9f5309
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Dieser Artikel erklärt, wie Sie die Autovervollständigung für Formularfelder auf einer Website deaktivieren.

## Verstehen von Autovervollständigung und Autofill

Standardmäßig merken sich Browser Informationen, die der Benutzer über {{HTMLElement("input")}}-Felder auf Websites eingibt. Dies ermöglicht es Browsern, Autovervollständigung vorzuschlagen (das heißt, mögliche Vervollständigungen für Felder anzubieten, in denen der Benutzer bereits zu tippen begonnen hat) oder Autofill (das heißt, bestimmte Felder beim Laden vorab zu befüllen).

Diese Funktionen sind normalerweise standardmäßig aktiviert, können jedoch ein Datenschutzproblem für Benutzer darstellen. Deshalb erlauben Browser Benutzern, sie zu deaktivieren. Einige in Formularen übermittelte Daten sind jedoch entweder über die aktuelle Interaktion hinaus nicht nützlich (zum Beispiel eine einmalige PIN) oder enthalten sensible Informationen (zum Beispiel eine eindeutige staatliche Kennung oder der Sicherheitscode einer Kreditkarte). Als Website-Autor bevorzugen Sie möglicherweise, dass der Browser die Werte für solche Felder nicht speichert, selbst wenn die Autovervollständigungsfunktion des Browsers aktiviert ist.

> **Hinweis:** [WCAG 2.1 Erfolgskriterium 1.3.5: Zweck von Eingaben identifizieren](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html) erfordert nicht, dass Auto-Vervollständigungs- oder Autofill-Funktionen funktionieren müssen; es erfordert nur, dass Formularfelder, die sich auf spezifische persönliche Benutzerinformationen beziehen, programmatisch identifiziert werden. Das bedeutet, dass das Kriterium immer noch erfüllt werden kann (durch Hinzufügen der entsprechenden [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Attribute zu einzelnen Formularfeldern), selbst wenn die Autovervollständigung für das Formular selbst deaktiviert wurde.

## Deaktivieren der Autovervollständigung

Um die Autovervollständigung in Formularen zu deaktivieren, können Sie das [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Attribut auf `"off"` setzen:

```plain
autocomplete="off"
```

Sie können dies entweder für ein gesamtes Formular oder für bestimmte Eingabeelemente in einem Formular tun:

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

Das Setzen von `autocomplete="off"` auf Felder hat zwei Effekte:

- Es teilt dem Browser mit, die vom Benutzer eingegebenen Daten nicht für spätere Autovervollständigungen in ähnlichen Formularen zu speichern, obwohl die Heuristiken zur Befolgung je nach Browser variieren.
- Es verhindert, dass der Browser Formulardaten im Sitzungsverlauf zwischenspeichert. Wenn Formulardaten im Sitzungsverlauf zwischengespeichert werden, werden die vom Benutzer eingegebenen Informationen angezeigt, falls der Benutzer das Formular gesendet hat und die Schaltfläche "Zurück" betätigt, um zur ursprünglichen Formularseite zurückzukehren.

Wenn ein Browser weiterhin Vorschläge macht, selbst nachdem die Autovervollständigung deaktiviert wurde, müssen Sie das `name`-Attribut des `<input>`-Elements ändern.

## Verwaltung von Autofill für Anmeldefelder

Moderne Browser implementieren ein integriertes Passwortmanagement: Wenn der Benutzer einen Benutzernamen und ein Passwort für eine Site eingibt, bietet der Browser an, es für den Benutzer zu speichern. Wenn der Benutzer die Site erneut besucht, füllt der Browser die Anmeldefelder mit den gespeicherten Werten automatisch aus.

Zusätzlich ermöglicht der Browser dem Benutzer, ein Hauptkennwort auszuwählen, das der Browser verwendet, um die gespeicherten Anmeldedaten zu verschlüsseln.

Auch ohne ein Hauptkennwort wird das Passwortmanagement im Browser allgemein als Sicherheitsgewinn angesehen. Da Benutzer sich keine Passwörter merken müssen, die der Browser für sie speichert, können sie stärkere Passwörter wählen als sonst.

Aus diesem Grund unterstützen viele moderne Browser `autocomplete="off"` für Anmeldefelder nicht:

- Wenn eine Site `autocomplete="off"` auf einem {{HTMLElement("form")}}-Element setzt und das Formular Eingabefelder für Benutzername und Passwort enthält, bietet der Browser dennoch an, diese Anmeldung zu speichern. Wenn der Benutzer zustimmt, füllt der Browser diese Felder aus, wenn der Benutzer die Seite das nächste Mal besucht.
- Wenn eine Site `autocomplete="off"` für Benutzername- und Passwort-{{HTMLElement("input")}}-Felder setzt, bietet der Browser dennoch an, diese Anmeldung zu speichern. Wenn der Benutzer zustimmt, füllt der Browser diese Felder das nächste Mal aus, wenn der Benutzer die Seite besucht.

Wenn Sie eine Nutzerverwaltungsseite definieren, auf der ein Benutzer ein neues Passwort für eine andere Person festlegen kann, und daher das Ausfüllen von Passwortfeldern verhindern möchten, können Sie `autocomplete="new-password"` verwenden.

Dieses Attribut ist ein Hinweis für Browser; einige halten sich möglicherweise nicht daran.
