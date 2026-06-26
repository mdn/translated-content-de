---
title: "`autocomplete` HTML-Attribut"
short-title: autocomplete
slug: Web/HTML/Reference/Attributes/autocomplete
l10n:
  sourceCommit: d4233d098f7c9c375716542aab8637122bb10edf
---

Das HTML-Attribut `autocomplete` ermöglicht es Webentwicklern anzugeben, ob und inwieweit der {{Glossary("user_agent", "User-Agent")}} die Erlaubnis hat, automatisierte Unterstützung bei der Ausfüllung von Formularfeldwerten zu leisten, sowie dem Browser einen Hinweis auf die Art der im Feld erwarteten Informationen zu geben.

Es ist verfügbar auf {{HTMLElement("input")}}-Elementen, die einen Text- oder numerischen Wert als Eingabe erlauben, auf {{HTMLElement("textarea")}}-Elementen, {{HTMLElement("select")}}-Elementen und {{HTMLElement("form")}}-Elementen.

{{InteractiveExample("HTML Demo: autocomplete", "tabbed-shorter")}}

```html interactive-example
<label for="firstName">First Name:</label>
<input name="firstName" id="firstName" type="text" autocomplete="given-name" />

<label for="lastName">Last Name:</label>
<input name="lastName" id="lastName" type="text" autocomplete="family-name" />

<label for="email">Email:</label>
<input name="email" id="email" type="email" autocomplete="off" />
```

```css interactive-example
label {
  display: block;
  margin-top: 1rem;
}
```

## Beschreibung

Das `autocomplete`-Attribut bietet dem User-Agent einen Hinweis darauf, wie oder ob ein Formularfeld vorab ausgefüllt werden soll. Der Attributwert ist entweder das Schlüsselwort `off` oder `on` oder eine geordnete Liste von mit Leerzeichen getrennten Tokens.

```html
<input autocomplete="off" />
<input autocomplete="on" />
<textarea autocomplete="shipping street-address"></textarea>
<input autocomplete="section-user1 billing postal-code" />
```

Wenn ein {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}}-Element kein `autocomplete`-Attribut hat, verwendet der Browser das [`autocomplete`-Attribut des **besitzenden Formulars** des Elements](/de/docs/Web/HTML/Reference/Elements/form#autocomplete). Das besitzende Formular ist entweder das {{HTMLElement("form")}}, das der `id` entspricht, die durch das [`form`](/de/docs/Web/HTML/Reference/Attributes/form)-Attribut des Elements angegeben ist (falls vorhanden) oder, häufiger, das `<form>`, in dem das Element verschachtelt ist.

> [!NOTE]
> Um die Autovervollständigung zu ermöglichen, können User-Agents von `<input>`/`<select>`/`<textarea>`-Elementen verlangen:
>
> 1. Ein `name`- und/oder `id`-Attribut zu haben
> 2. Nachfahren eines `<form>`-Elements zu sein
> 3. Zu einem Formular zu gehören, das einen {{HTMLElement("input/submit", "submit")}}-Button hat

Wenn dieselbe Liste von Tokens in mehr als einem Formularelement verwendet wird, füllt der User-Agent alle Vorkommen des gleichen `autocomplete`-Werts mit dem gleichen Datenwert aus.

Einige Tokens können mehrmals mit potenziell unterschiedlichen erwarteten Werten verwendet werden, wie z.B. das `postal-code` Token in einem Formular, das sowohl Versand- als auch Rechnungsadressen enthält. Wenn mehrere verschiedene Tokens in einer durch Leerzeichen getrennten Liste enthalten sind, erhalten die zugeordneten Formularfelder eindeutige Autovervollständigungswerte: in diesem Fall `autocomplete="shipping postal-code"` und `autocomplete="billing postal-code"`.

Bestimmte Autovervollständigungswerte müssen möglicherweise mehrfach verwendet werden. Zum Beispiel kann ein Formular mehrere Versandadressen enthalten und daher mehrere Vorkommen von `"shipping postal-code"` erwarten, während es gleichzeitig unterschiedliche Werte erwartet. Um den Autovervollständigungswert in diesen Fällen eindeutig zu machen, kann das erste Token in der durch Leerzeichen getrennten Liste von Tokens ein `section-*` Token sein, wobei die ersten acht Zeichen des Tokens immer die Zeichenfolge "section-" sind, gefolgt von einer alphanumerischen Zeichenfolge. Alle Formularfelder, die das `section-*` Token mit derselben alphanumerischen Zeichenfolge haben, gehören zu derselben **benannten Gruppe**.

Wenn das `autocomplete`-Attribut bei {{HTMLElement("input/hidden", "hidden")}}-Eingabeelementen (`<input type="hidden">`) enthalten ist, muss sein Wert eine geordnete Liste von durch Leerzeichen getrennten Tokens sein; die Schlüsselwörter `on` und `off` sind nicht erlaubt.

Die Quelle der vorgeschlagenen Werte liegt im Allgemeinen beim Browser; typischerweise stammen die Werte aus früheren Werten, die der Benutzer eingegeben hat, aber sie können auch aus voreingestellten Werten stammen. Ein Browser könnte beispielsweise dem Benutzer die Möglichkeit bieten, Name, Adresse, Telefonnummern und E-Mail-Adressen zum Zweck der Autovervollständigung zu speichern. Der Browser kann auch die Fähigkeit bieten, verschlüsselte Kreditkarteninformationen zu speichern, um die Autovervollständigung nach einem Authentifizierungsverfahren anzubieten.

> [!NOTE]
> Das `autocomplete`-Attribut steuert auch, ob Firefox – im Gegensatz zu anderen Browsern – [den dynamischen deaktivierten Zustand und (falls zutreffend) die dynamische Markierung](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>`-Elements, `<textarea>`-Elements oder gesamten `<form>` über Seitenladungen hinweg beibehält. Die Beibehaltungsfunktion ist standardmäßig aktiviert. Das Festlegen des `autocomplete`-Attributwerts auf `off` deaktiviert diese Funktion. Dies funktioniert auch dann, wenn das `autocomplete`-Attribut normalerweise nicht aufgrund seines `type` anwendbar ist. Siehe [Firefox-Bug 654072](https://bugzil.la/654072).

## Wert

Der Attributwert ist entweder das Schlüsselwort `off` oder `on` oder eine durch Leerzeichen getrennte `<token-list>`, die die Bedeutung des Autovervollständigungswerts beschreibt.

- `off`
  - : Der Browser darf für dieses Feld keinen Wert automatisch eingeben oder auswählen. Es ist möglich, dass das Dokument oder die Anwendung eine eigene Autovervollständigungsfunktion bietet oder dass Sicherheitsanforderungen erfordern, dass der Wert des Feldes nicht automatisch eingegeben wird.

    > [!NOTE]
    > In den meisten modernen Browsern verhindert das Setzen von `autocomplete` auf `"off"` nicht, dass ein Passwortmanager den Benutzer fragt, ob er die Benutzername- und Passwortinformationen speichern möchte oder diese Werte automatisch in einem Anmeldeformular der Website einfügt. Siehe [Verwalten der Autofill für Log-in-Felder](/de/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion#managing_autofill_for_login_fields).

- `on`
  - : Der Browser darf die Eingabe automatisch vervollständigen. Es wird keine Anleitung zur Art der erwarteten Daten im Feld bereitgestellt, sodass der Browser nach eigenem Ermessen handeln kann.

- `<token-list>`
  - : Eine geordnete Menge von [space-separated tokens](#token-listen-tokens), die aus Autofill-Detailtokens besteht, die von optionalen Sektionierungs- und entweder Rechnungs- oder Versandgruppierungstokens vorangestellt werden. Telefonnummern, E-Mail-Adressen und Messaging-Protokoll-Tokens sind einem Token vorangestellt, das den Empfängertyp identifiziert.

Siehe den [WHATWG-Standard](https://html.spec.whatwg.org/multipage/forms.html#autofill) für detailliertere Informationen.

### Token-Listen-Tokens

Die `<token-list>` Optionen umfassen in der Reihenfolge:

1. [Gruppen-Namen-Token](#benannte_gruppen)
2. [Gruppierungsidentifikator](#gruppierungsidentifikator)
3. [Detailtokens](#detailtokens)
4. [Webautorisierung](#webautorisierungs-token)

#### Benannte Gruppen

Um eine benannte Gruppe von Formularfeldern zu erstellen, kann das optionale `section-*`-Token verwendet werden. Wenn vorhanden, muss dieses Token das erste Token in der durch Leerzeichen getrennten Liste von Tokens sein.

- `section-*`
  - : Definiert den Namen für eine Gruppe von Formularelementen. Ein Token, dessen erste acht Zeichen die Zeichenfolge "section-" sind, Groß-/Kleinschreibung nicht beachtend, gefolgt von zusätzlichen Zeichen. Alle Formularelemente, die mit demselben Token beginnen, gehören zur benannten Gruppe.

#### Gruppierungsidentifikator

Ein optionaler `shipping`- oder `billing`-Gruppierungsidentifikator

- `shipping`
  - : Das durch nachfolgende Tokens identifizierte Feld ist Teil der Versandadresse oder Kontaktinformationen
- `billing`
  - : Das durch nachfolgende Tokens identifizierte Feld ist Teil der Rechnungsadresse oder Kontaktinformationen

#### Detailtokens

Jede durch Leerzeichen getrennte Detaitoken-Liste enthält entweder einen Empfängertyp mit digitalen Kontaktinformationen, in dieser Reihenfolge, oder eine durch Leerzeichen getrennte Liste von anderen Tokens.

##### Empfängertyp

Die Tokens, die den Typ des Empfängers identifizieren, umfassen:

- `home`
  - : Der Kontakttyp, der durch nachfolgende Tokens identifiziert wird, dient zur Kontaktaufnahme mit dem Empfänger an seinem Wohnsitz.
- `work`
  - : Der Kontakttyp, der durch nachfolgende Tokens identifiziert wird, dient zur Kontaktaufnahme mit dem Empfänger an seinem Arbeitsplatz.
- `mobile`
  - : Der Kontakttyp, der durch nachfolgende Tokens identifiziert wird, dient zur Kontaktaufnahme mit dem Empfänger unabhängig vom Standort.
- `fax`
  - : Der Empfänger, der durch nachfolgende Tokens identifiziert wird, steht für ein Faxgerät.
- `pager`
  - : Der Empfänger, der durch nachfolgende Tokens identifiziert wird, steht für einen Pager oder einen Personenrufempfänger.

##### Digitale Kontakt-Tokens

Das Token oder die Gruppe von Tokens für Telefonnummern oder die Komponenten einer Nummer, Telefonnummernerweiterungen, E-Mail-Adressen oder Instant-Messaging-Protokolle.

- `tel`
  - : Eine vollständige Telefonnummer, einschließlich der Ländervorwahl. Wenn Sie die Telefonnummer in ihre Komponenten aufteilen müssen, können Sie diese Werte für diese Felder verwenden:
    - `tel-country-code`
      - : Die Ländervorwahl, wie z.B. "1" für die Vereinigten Staaten, Kanada und andere Gebiete in Nordamerika und Teilen der Karibik.
    - `tel-national`
      - : Die gesamte Telefonnummer ohne die Ländervorwahl, einschließlich eines länderinternen Präfixes. Bei der Telefonnummer "1-855-555-6502" wäre der Wert dieses Feldes "855-555-6502".
    - `tel-area-code`
      - : Die Vorwahl, mit einem länderinternen Präfix, falls geeignet.
    - `tel-local`
      - : Die Telefonnummer ohne die Länder- oder Vorwahl. Diese kann weiter in zwei Teile aufgeteilt werden, bei Telefonnummern, die eine Austausch-Nummer und dann eine Nummer innerhalb des Austauschs haben. Bei der Telefonnummer "555-6502" verwenden Sie `tel-local-prefix` für "555" und `tel-local-suffix` für "6502".

- `tel-extension`
  - : Ein Telefonauswahlcode innerhalb der Telefonnummer, wie eine Raum- oder Suitennummer in einem Hotel oder eine Büroerweiterung in einem Unternehmen.
- `email`
  - : Eine E-Mail-Adresse.
- `impp`
  - : Eine URL für einen Instant-Messaging-Protokollendpunkt, wie `xmpp:username@example.net`.

##### Andere Tokens

Wenn das Formularfeld keine Telefonnummer, E-Mail-Adresse oder kein Instant-Messaging-Protokoll ist, wird die durch Leerzeichen getrennte Tokenliste nicht von einem Kontakttyp vorangestellt:

- `name`
  - : Das Feld erwartet den Wert als vollständigen Namen einer Person. Die Verwendung von `name` anstelle des Aufteilens des Namens in seine Komponenten wird im Allgemeinen bevorzugt, da es den Umgang mit der großen Vielfalt menschlicher Namen und deren Strukturierung vermeidet; jedoch können Sie die folgenden `autocomplete`-Werte verwenden, wenn Sie den Namen in seine Komponenten aufteilen müssen:
    - `honorific-prefix`
      - : Das Präfix oder der Titel, wie "Mrs.", "Mr.", "Miss", "Ms.", "Dr." oder "Mlle.".
    - `given-name`
      - : Der Vorname (oder "erste" Name).
    - `additional-name`
      - : Der zweite Vorname.
    - `family-name`
      - : Der Nachname (oder "letzter" Name).
    - `honorific-suffix`
      - : Der Suffix, wie "Jr.", "B.Sc.", "PhD.", "MBASW" oder "IV".
    - `nickname`
      - : Ein Spitzname oder Handle.

- `username`
  - : Ein Benutzername oder Kontoname.
- `new-password`
  - : Ein neues Passwort. Beim Erstellen eines neuen Kontos oder Ändern von Passwörtern sollte dies für ein Feld "Geben Sie Ihr neues Passwort ein" oder "Bestätigen Sie neues Passwort" verwendet werden, im Gegensatz zu einem allgemeinen Feld "Geben Sie Ihr aktuelles Passwort ein", das möglicherweise vorhanden ist. Dies könnte vom Browser sowohl verwendet werden, um zu vermeiden, versehentlich ein bestehendes Passwort zu füllen, als auch um Hilfe beim Erstellen eines sicheren Passworts zu bieten.
- `current-password`
  - : Das aktuelle Passwort des Benutzers.
- `one-time-code`
  - : Ein Einmal-Passwort (OTP) zur Verifizierung der Benutzeridentität, das als zusätzlicher Faktor in einem Anmeldefluss verwendet wird. Am häufigsten ist dies ein Code, der über einen kanalübergreifenden Mechanismus, wie eine SMS, eine E-Mail oder eine Authenticator-App, empfangen wird.
- `organization-title`
  - : Ein Jobtitel oder der Titel, den eine Person innerhalb einer Organisation hat, z.B. "Senior Technical Writer", "President" oder "Assistant Troop Leader".
- `organization`
  - : Ein Firmen- oder Organisationsname, z.B. "Acme Widget Company" oder "Girl Scouts of America".
- `street-address`
  - : Eine Straßenadresse. Dies kann mehrere Textzeilen sein und sollte die Lage der Adresse innerhalb der zweiten administrativen Ebene (typischerweise eine Stadt oder ein Ort) vollständig identifizieren, sollte aber nicht den Stadtnamen, die Postleitzahl oder den Ländernamen beinhalten.
    - `address-line1`, `address-line2`, `address-line3`
      - : Jede einzelne Zeile der Straßenadresse. Diese sollten nur vorhanden sein, wenn die `street-address` nicht vorhanden ist.
- `address-level4`
  - : Die feinste [administrative Ebene](#administrative_ebenen_in_adressen), in Adressen, die vier Ebenen haben.
- `address-level3`
  - : Die dritte [administrative Ebene](#administrative_ebenen_in_adressen), in Adressen mit mindestens drei administrativen Ebenen.
- `address-level2`
  - : Die zweite [administrative Ebene](#administrative_ebenen_in_adressen), in Adressen mit mindestens zwei von ihnen. In Ländern mit zwei administrativen Ebenen wäre dies typischerweise die Stadt, das Dorf oder die andere Lokalität, in der sich die Adresse befindet.
- `address-level1`
  - : Die erste [administrative Ebene](#administrative_ebenen_in_adressen) in der Adresse. Dies ist typischerweise die Provinz, in der sich die Adresse befindet. In den Vereinigten Staaten wäre dies der Bundesstaat. In der Schweiz der Kanton. Im Vereinigten Königreich die Grafschaft.
- `country`
  - : Ein Länder- oder Territoriumscode.
- `country-name`
  - : Ein Länder- oder Territoriumsname.
- `postal-code`
  - : Eine Postleitzahl (in den Vereinigten Staaten ist dies die ZIP-Code).

- `cc-name`
  - : Der vollständige Name, wie er auf einem Zahlungsmittel wie einer Kreditkarte gedruckt oder zugeordnet ist. Die Verwendung eines vollständigen Namensfeldes wird typischerweise bevorzugt gegenüber der Aufteilung des Namens in Teile. - `cc-given
-name` - : Ein Vorname, wie er auf einem Zahlungsmittel oder einer Kreditkarte angegeben ist. - `cc-additional-name` - : Ein zweiter Vorname, wie er auf einem Zahlungsmittel oder einer Kreditkarte angegeben ist. - `cc-family-name` - : Ein Nachname, wie er auf einer Kreditkarte angegeben ist.
- `cc-number`
  - : Eine Kreditkartennummer oder eine andere Nummer, die ein Zahlungsmittel identifiziert, wie eine Kontonummer.
- `cc-exp`
  - : Ein Verfallsdatum für das Zahlungsmittel, typischerweise im Format "MM/YY" oder "MM/YYYY".
    - `cc-exp-month`
      - : Der Monat, in dem das Zahlungsmittel verfällt.
    - `cc-exp-year`
      - : Das Jahr, in dem das Zahlungsmittel verfällt.
- `cc-csc`
  - : Der Sicherheitscode für das Zahlungsmittel; bei Kreditkarten ist dies die dreistellige Verifikationsnummer auf der Rückseite der Karte.
- `cc-type`
  - : Der Typ des Zahlungsmittels (wie "Visa" oder "Master Card").
- `transaction-currency`
  - : Die Währung, in der die Transaktion durchgeführt werden soll.
- `transaction-amount`
  - : Der Betrag, angegeben in der durch `transaction-currency` spezifizierten Währung, für ein Zahlungsformular.
- `language`
  - : Eine bevorzugte Sprache, angegeben als gültiges {{Glossary("BCP_47_language_tag", "BCP 47-Language-Tag")}}.
- `bday`
  - : Ein Geburtsdatum als vollständiges Datum.
    - `bday-day`
      - : Der Tag des Monats des Geburtsdatums.
    - `bday-month`
      - : Der Monat des Jahres des Geburtsdatums.
    - `bday-year`
      - : Das Jahr des Geburtsdatums.
- `sex`
  - : Eine Geschlechtsidentität (wie "Female", "Fa'afafine", "Hijra", "Male", "Nonbinary"), als Freiform-Text ohne neue Zeilen.
- `url`
  - : Eine URL, wie eine Homepage oder die Adresse einer Unternehmenswebsite, je nach Kontext der anderen Felder im Formular.
- `photo`
  - : Die URL eines Bildes, das die Person, das Unternehmen oder die Kontaktdaten darstellt, die in den anderen Feldern im Formular angegeben sind.

#### Webautorisierungs-Token

Mit {{htmlelement("input")}} und {{htmlelement("textarea")}} kann das `webauthn`-Token zuletzt enthalten sein, um anzuzeigen, dass der User-Agent öffentliche Schlüsselberechtigungen anzeigen soll, wenn der Benutzer mit dem Steuerungselement interagiert.

- `webauthn`
  - : Passkeys, generiert durch die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API), wie sie durch einen bedingten [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf angefordert werden (d.h. einer, der `mediation: 'conditional'` beinhaltet). Wenn enthalten, ist dies das letzte Token in der durch Leerzeichen getrennten Token-Liste. Siehe [Sign in with a passkey through form autofill](https://web.dev/articles/passkey-form-autofill) für mehr Details.

## Barrierefreiheit

Das Verwenden geeigneter `autocomplete`-Werte hilft Benutzern mit kognitiven Behinderungen, motorischen Einschränkungen und anderen Bedingungen, Formulare schneller und genauer auszufüllen, indem die Notwendigkeit reduziert wird, Informationen zu tippen und sich zu merken. Wenn der Browser den Zweck eines Formularfeldes durch seinen `autocomplete`-Wert identifizieren kann, kann er gespeicherte Daten wie Namen, Adressen und Zahlungsdetails anbieten, was allen Benutzern zugutekommt, jedoch besonders wichtig ist für diejenigen, die das manuelle Eingeben von Daten schwierig finden.

Die Bereitstellung gültiger Autovervollständigungs-Token erfüllt auch [WCAG 2.2 Erfolgskriterium 1.3.5: Eingabezweck bestimmen](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose) (Level AA), das erfordert, dass der Zweck von Eingabefeldern, die Benutzerdaten sammeln, programmatisch bestimmt werden kann. Dadurch können User-Agents und Unterstützende Technologien personalisierte Darstellungen anwenden, wie z.B. vertraute Symbole neben Feldern anzuzeigen, um Benutzern zu helfen, Formulare zu verstehen und auszufüllen.

### Vermeiden Sie das Deaktivieren der Autovervollständigung

Das Setzen von `autocomplete="off"` verhindert, dass der Browser gespeicherte Daten für ein Feld anbietet. Während Entwickler dies manchmal aus Sicherheitsgründen (wie Einmal-Codes) verwenden, entfernt es eine Funktion, auf die viele Benutzer angewiesen sind. Benutzer mit kognitiven Behinderungen können auf Autovervollständigung zurückgreifen, um persönliche Informationen abzurufen, und Benutzer mit motorischen Einschränkungen profitieren von der Reduzierung des Tippens. Browser können auch `autocomplete="off"` bei Login-Feldern ignorieren, um Passwortmanager zu unterstützen.

### Vermeiden Sie ungültige Autovervollständigungswerte

Die Verwendung ungültiger oder nicht standardisierter Werte (wie erfundene Zeichenfolgen, um Autofill zu umgehen) hat eine ähnliche Wirkung: Der Browser kann das Feld keinem bekannten Zweck zuordnen und kann daher keine relevanten Vorschläge anbieten. Dies erfüllt auch nicht die oben genannte WCAG-Anforderung, da der Eingabezweck nicht mehr programmatisch bestimmbar ist. Wenn Sie die Autofill für ein bestimmtes Feld deaktivieren müssen, sollten Sie `autocomplete="off"` nur dort verwenden, wo es wirklich notwendig ist (z.B. für CAPTCHA oder Einmal-Token-Felder) und nicht allgemein für ein ganzes Formular.

## Beispiele

```html
<div>
  <label for="cc-number">Enter your credit card number</label>
  <input name="cc-number" id="cc-number" autocomplete="off" />
</div>
```

### Administrative Ebenen in Adressen

Die vier administrativen Ebenenfelder (`address-level1` bis `address-level4`) beschreiben die Adresse in Bezug auf zunehmende Präzision innerhalb des Landes, in dem sich die Adresse befindet. Jedes Land hat sein eigenes System von administrativen Ebenen und kann die Ebenen in unterschiedlichen Reihenfolgen anordnen, wenn Adressen geschrieben werden.

`address-level1` repräsentiert immer die breiteste administrative Unterteilung; es ist der am wenigsten spezifische Teil der Adresse, kurz vor dem Ländernamen.

### Flexibilität im formlayout

Angesichts der Tatsache, dass verschiedene Länder ihre Adressen auf unterschiedliche Weise schreiben, mit jedem Feld an unterschiedlichen Stellen innerhalb der Adresse und sogar verschiedenen Sets und Anzahlen von Feldern insgesamt, kann es hilfreich sein, wenn Ihre Webseite die Möglichkeit hat, das Layout zu verwenden, das von Ihren Benutzern erwartet wird, wenn ein Adresseneingabeformular angezeigt wird, basierend auf dem Land, in dem sich die Adresse befindet.

### Variationen

Die Art und Weise, wie jede administrative Ebene verwendet wird, variiert von Land zu Land. Nachfolgend finden Sie einige Beispiele; dies soll keine vollständige Liste sein.

#### Vereinigte Staaten

Eine typische Wohnadresse innerhalb der Vereinigten Staaten sieht folgendermaßen aus:

432 Anywhere St
Exampleville CA 95555

In den Vereinigten Staaten ist der am wenigsten spezifische Teil der Adresse der Bundesstaat, in diesem Fall "CA" (die offizielle Abkürzung des US-Postdienstes für "California"). Somit ist `address-level1` der Bundesstaat, oder in diesem Fall "CA".

Der zweitwenig spezifische Teil der Adresse ist der Stadt- oder Ortsname, daher ist `address-level2` "Exampleville" in diesem Beispiel.

Adressen in den Vereinigten Staaten verwenden keine Ebenen 3 und höher.

#### Vereinigtes Königreich

Adresseneingabeformulare im Vereinigten Königreich sollten ein oder zwei Adressenebenen und ein, zwei oder drei Adresszeilen enthalten, je nach Adresse. Eine vollständige Adresse würde folgendermaßen aussehen:

103 Frogmarch Street
Upper-Wapping
Winchelsea
Whereshire
TN99 8ZZ

Die Adressenebenen sind:

- `address-level1`: Die Grafschaft — "Whereshire" in diesem Fall.
- `address-level2`: Die Poststadt — "Winchelsea" in diesem Fall.
- `address-line2`: Der Ort — "Upper-Wapping" in diesem Fall.
- `address-line1`: Die Haus-/Straßendetails — "103 Frogmarch Street".

Der Postcode ist separat. Beachten Sie, dass Sie tatsächlich nur den Postcode und `address-line1` verwenden können, um erfolgreich Post im Vereinigten Königreich zuzustellen, daher sollten sie die einzigen verpflichtenden Elemente sein, aber normalerweise neigen Menschen dazu, mehr Details anzugeben.

#### China

China kann bis zu drei administrative Ebenen verwenden: die Provinz, die Stadt und den Bezirk.

Die sechsstellige Postleitzahl ist nicht immer erforderlich, aber wenn sie angegeben wird, wird sie zur Klarheit separat mit einem Label versehen. Zum Beispiel:

北京市东城区建国门北大街 8 号华润大厦 17 层 1708 单元
邮编：100005

#### Japan

Eine Adresse in Japan wird typischerweise **in einer Zeile geschrieben**, in einer Reihenfolge von den unspezifischeren zu den spezifischeren Teilen (in **umgekehrter Reihenfolge zu den Vereinigten Staaten**). Es gibt zwei oder drei administrative Ebenen in einer Adresse. Eine zusätzliche Zeile kann verwendet werden, um Gebäudenamen und Raumnummern anzuzeigen. Die Postleitzahl wird getrennt angegeben. Zum Beispiel:

〒 381-0000
長野県長野市某町 123

"〒" und die folgenden sieben Ziffern zeigen die Postleitzahl an.

`address-level1` wird für Präfekturen oder die Tokyo Metropole verwendet; "長野県" (Präfektur Nagano) ist in diesem Fall. `address-level2` wird typischerweise für Städte, Landkreise, Gemeinden und Dörfer verwendet; "長野市" (Stadt Nagano) in diesem Fall. "某町 123" ist `address-line1`, das aus einem Gebietsnamen und einer Losnummer besteht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{htmlelement("input")}}-Element
- Das {{htmlelement("select")}}-Element
- Das {{htmlelement("textarea")}}-Element
- Das {{htmlelement("form")}}-Element
- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
