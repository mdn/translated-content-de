---
title: Wie Sie die Formular-Autovervollständigung deaktivieren
slug: Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion
l10n:
  sourceCommit: a1503878b921fc6e141fe8d491dbbd02e75e6725
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Dieser Artikel erklärt, wie Sie die Autovervollständigung für Formularfelder auf einer Website deaktivieren können.

## Verständnis von Autovervollständigung und Auto-Ausfüllen

Standardmäßig speichern Browser Informationen, die der Benutzer über {{HTMLElement("input")}}-Felder auf Websites eingibt. Dies ermöglicht es Browsern, Autovervollständigung anzubieten (das heißt, Vorschläge für mögliche Vervollständigungen für Felder zu machen, in denen der Benutzer zu tippen begonnen hat) oder das Autofill (das heißt, bestimmte Felder beim Laden vorzubelegen).

Diese Funktionen sind normalerweise standardmäßig aktiviert, können jedoch ein Datenschutzproblem für Benutzer darstellen, sodass Browser den Nutzern die Möglichkeit geben, diese zu deaktivieren. Allerdings sind einige Daten, die in Formularen übermittelt werden, über die aktuelle Interaktion hinaus entweder nicht nützlich (zum Beispiel eine einmalige PIN) oder enthalten sensible Informationen (zum Beispiel eine eindeutige Regierungs-ID oder der Sicherheitscode einer Kreditkarte). Als Website-Autor könnten Sie es vorziehen, dass der Browser die Werte für solche Felder nicht speichert, selbst wenn die Autovervollständigungsfunktion des Browsers aktiviert ist.

> **Note:** [WCAG 2.1 Erfolgskriterium 1.3.5: Zweck von Eingaben identifizieren](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html) erfordert nicht, dass Autovervollständigungs- oder Autofill-Funktionen funktionieren; es wird nur verlangt, dass Formulareingabefelder, die sich auf spezifische persönliche Benutzerinformationen beziehen, programmatisch identifiziert werden. Das bedeutet, dass das Kriterium dennoch erfüllt werden kann (indem die entsprechenden [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Attribute zu einzelnen Formulareingabefeldern hinzugefügt werden), selbst wenn die Autovervollständigung für das Formular selbst deaktiviert wurde.

## Deaktivieren der Autovervollständigung

Um die Autovervollständigung in Formularen zu deaktivieren, können Sie das [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Attribut auf `"off"` setzen:

```plain
autocomplete="off"
```

Sie können dies entweder für ein gesamtes Formular oder für spezifische Eingabeelemente in einem Formular tun:

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

- Es weist den Browser an, keine von den Benutzern eingegebenen Daten zu speichern, um sie später für ähnliche Formulare automatisch zu vervollständigen (einige Browser machen Ausnahmen für Sonderfälle, wie das Anbieten dem Benutzer, Passwörter zu speichern).
- Es verhindert, dass der Browser Formulardaten im Sitzungsverlauf zwischenspeichert. Wenn Formulardaten im Sitzungsverlauf zwischengespeichert werden, werden die vom Benutzer ausgefüllten Informationen angezeigt, falls der Benutzer das Formular eingereicht hat und auf die Schaltfläche „Zurück“ geklickt hat, um zur ursprünglichen Formularseite zurückzukehren.

Wenn ein Browser weiterhin Vorschläge macht, selbst nachdem die Autovervollständigung deaktiviert wurde, müssen Sie das `name`-Attribut des `<input>`-Elements ändern.

## Verwaltung des Autofill für Login-Felder

Moderne Browser implementieren ein integriertes Passwortmanagement: Wenn der Benutzer einen Benutzernamen und ein Passwort für eine Website eingibt, bietet der Browser an, diese für den Benutzer zu speichern. Wenn der Benutzer die Website erneut besucht, füllt der Browser die Anmeldefelder mit den gespeicherten Werten aus.

Zusätzlich ermöglicht der Browser dem Benutzer die Auswahl eines Master-Passworts, das der Browser verwenden wird, um gespeicherte Anmeldedaten zu verschlüsseln.

Auch ohne ein Master-Passwort wird das Passwortmanagement im Browser allgemein als Nettogewinn für die Sicherheit angesehen. Da Benutzer keine Passwörter merken müssen, die der Browser für sie speichert, können sie stärkere Passwörter auswählen, als sie es sonst tun würden.

Aus diesem Grund unterstützen viele moderne Browser `autocomplete="off"` für Login-Felder nicht:

- Wenn eine Seite `autocomplete="off"` auf einem {{HTMLElement("form")}}-Element setzt und das Formular Benutzername- und Passwort-Eingabefelder enthält, wird der Browser dennoch anbieten, diesen Login zu speichern. Wenn der Benutzer zustimmt, wird der Browser diese Felder ausfüllen, sobald der Benutzer die Seite erneut besucht.
- Wenn eine Seite `autocomplete="off"` für Benutzername- und Passwort-{{HTMLElement("input")}}-Felder setzt, wird der Browser trotzdem anbieten, diesen Login zu speichern. Wenn der Benutzer zustimmt, wird der Browser diese Felder ausfüllen, sobald der Benutzer die Seite erneut besucht.

Wenn Sie eine Benutzerverwaltungsseite definieren, auf der ein Benutzer ein neues Passwort für eine andere Person angeben kann und Sie daher das Autofill für Passwortfelder verhindern möchten, können Sie `autocomplete="new-password"` verwenden.

Dieses Attribut ist ein Hinweis für Browser; einige könnten es nicht befolgen.
