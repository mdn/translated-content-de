---
title: Anleitung zum Deaktivieren der automatischen Vervollständigung in Formularen
slug: Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion
l10n:
  sourceCommit: 75e254fe894a22724a3d01ef6b20b9848e9f5309
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Dieser Artikel erklärt, wie Sie die automatische Vervollständigung für Formularfelder auf einer Website deaktivieren.

## Verständnis von automatischer Vervollständigung und automatischem Ausfüllen

Standardmäßig speichern Browser Informationen, die Benutzer über {{HTMLElement("input")}}-Felder auf Websites eingeben. Dies ermöglicht es Browsern, eine automatische Vervollständigung (d. h. Vorschläge für mögliche Eingaben in Feldern zu unterbreiten, in denen der Benutzer mit der Eingabe begonnen hat) oder ein automatisches Ausfüllen (d. h. beim Laden bestimmte Felder vorab zu füllen) anzubieten.

Diese Funktionen sind normalerweise standardmäßig aktiviert, können jedoch ein Datenschutzproblem für Benutzer darstellen, sodass Browser den Benutzern ermöglichen, sie zu deaktivieren. Einige Daten, die in Formularen eingereicht werden, sind jedoch entweder über die aktuelle Interaktion hinaus nicht nützlich (zum Beispiel eine einmalige PIN) oder enthalten sensible Informationen (zum Beispiel eine eindeutige Regierungskennung oder den Sicherheitscode der Kreditkarte). Als Website-Autor können Sie es bevorzugen, dass der Browser sich die Werte für solche Felder nicht merkt, selbst wenn die automatische Vervollständigungsfunktion des Browsers aktiviert ist.

> **Note:** [WCAG 2.1 Erfolgskriterium 1.3.5: Zweck von Eingaben identifizieren](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html) erfordert nicht, dass automatisches Vervollständigen oder automatisches Ausfüllen funktionieren muss; es verlangt nur, dass Formularfelder, die sich auf bestimmte persönliche Benutzerinformationen beziehen, programmatisch identifiziert werden. Das bedeutet, dass das Kriterium weiterhin erfüllt werden kann (indem die entsprechenden [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Attribute zu einzelnen Formularfeldern hinzugefügt werden), selbst wenn die automatische Vervollständigung für das Formular selbst deaktiviert wurde.

## Deaktivieren der automatischen Vervollständigung

Um die automatische Vervollständigung in Formularen zu deaktivieren, können Sie das [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Attribut auf `"off"` setzen:

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

Das Setzen von `autocomplete="off"` auf Feldern hat zwei Effekte:

- Es teilt dem Browser mit, dass die vom Benutzer eingegebenen Daten nicht für eine spätere automatische Vervollständigung in ähnlichen Formularen gespeichert werden sollen, obwohl die Heuristiken für die Einhaltung je nach Browser variieren.
- Es verhindert, dass der Browser Formulardaten im Sitzungsverlauf zwischenspeichert. Wenn Formulardaten im Sitzungsverlauf zwischengespeichert werden, werden die vom Benutzer ausgefüllten Informationen angezeigt, wenn der Benutzer das Formular abgeschickt hat und auf die Schaltfläche "Zurück" geklickt hat, um zur ursprünglichen Formularseite zurückzukehren.

Wenn ein Browser weiterhin Vorschläge macht, selbst nachdem die automatische Vervollständigung deaktiviert wurde, müssen Sie das `name`-Attribut des `<input>`-Elements ändern.

## Verwaltung des automatischen Ausfüllens für Anmeldefelder

Moderne Browser implementieren integrierte Passwortverwaltung: Wenn der Benutzer einen Benutzernamen und ein Passwort für eine Website eingibt, bietet der Browser an, dies für den Benutzer zu speichern. Wenn der Benutzer die Website erneut besucht, füllt der Browser die Anmeldefelder mit den gespeicherten Werten aus.

Außerdem ermöglicht der Browser dem Benutzer, ein Hauptpasswort auszuwählen, das der Browser verwendet, um gespeicherte Anmeldedaten zu verschlüsseln.

Selbst ohne ein Hauptpasswort wird die Passwortverwaltung im Browser allgemein als Sicherheitsgewinn angesehen. Da Benutzer nicht mehr die Passwörter merken müssen, die der Browser für sie speichert, können sie stärkere Passwörter wählen, als sie es sonst tun würden.

Aus diesem Grund unterstützen viele moderne Browser `autocomplete="off"` für Anmeldefelder nicht:

- Wenn eine Website `autocomplete="off"` auf einem {{HTMLElement("form")}}-Element setzt und das Formular Eingabefelder für Benutzernamen und Passwort enthält, wird der Browser dennoch anbieten, diese Anmeldung zu speichern. Wenn der Benutzer zustimmt, füllt der Browser diese Felder beim nächsten Besuch der Seite automatisch aus.
- Wenn eine Website `autocomplete="off"` für die {{HTMLElement("input")}}-Felder für Benutzernamen und Passwörter setzt, wird der Browser dennoch anbieten, diese Anmeldung zu speichern. Wenn der Benutzer zustimmt, füllt der Browser diese Felder beim nächsten Besuch der Seite automatisch aus.

Wenn Sie eine Benutzerverwaltungsseite definieren, auf der ein Benutzer ein neues Passwort für eine andere Person angeben kann und daher das automatische Ausfüllen der Passwortfelder verhindern möchten, können Sie `autocomplete="new-password"` verwenden.

Dieses Attribut ist ein Hinweis für Browser; einige müssen ihm möglicherweise nicht folgen.
