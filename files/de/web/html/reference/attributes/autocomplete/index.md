---
title: "HTML-Attribut: autocomplete"
short-title: autocomplete
slug: Web/HTML/Reference/Attributes/autocomplete
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das HTML-Attribut `autocomplete` ermöglicht es Webentwicklern, anzugeben, ob und welche Erlaubnis der {{Glossary("user_agent", "User-Agent")}} hat, automatisierte Unterstützung beim Ausfüllen von Formularfeldern zu bieten. Außerdem wird dem Browser eine Orientierung darüber gegeben, welche Art von Informationen im Feld erwartet werden.

Es ist verfügbar auf {{HTMLElement("input")}}-Elementen, die Text- oder numerische Werte als Eingabe nehmen, {{HTMLElement("textarea")}}-Elementen, {{HTMLElement("select")}}-Elementen und {{HTMLElement("form")}}-Elementen.

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

Das Attribut `autocomplete` gibt einen Hinweis an den User-Agent, wie oder ob ein Formularfeld vorab ausgefüllt werden soll. Der Attributwert ist entweder das Schlüsselwort `off` oder `on`, oder eine geordnete Liste von durch Leerzeichen getrennten Tokens.

```html
<input autocomplete="off" />
<input autocomplete="on" />
<input autocomplete="shipping street-address" />
<input autocomplete="section-user1 billing postal-code" />
```

Wenn ein {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}} Element kein `autocomplete` Attribut hat, wird der Browser das [`autocomplete` Attribut des **besitzenden Formulars** des Elements](/de/docs/Web/HTML/Reference/Elements/form#autocomplete) verwenden. Das besitzende Formular ist entweder das {{HTMLElement("form")}}, das mit der `id` übereinstimmt, die durch das [`form`](/de/docs/Web/HTML/Reference/Elements/input#form) Attribut des Elements spezifiziert wurde (falls vorhanden), oder, häufiger, das `<form>`, in dem das Element eingeschachtelt ist.

> [!NOTE]
> Um Autovervollständigung zu bieten, könnten User-Agents von `<input>`/`<select>`/`<textarea>` Elementen verlangen:
>
> 1. Ein `name` und/oder `id` Attribut zu haben
> 2. Nachkommen eines `<form>` Elements zu sein
> 3. Ein Formular zu besitzen, das einen {{HTMLElement("input/submit", "submit")}} Button hat

Wenn dieselbe Liste von Tokens in mehr als einem Formularelement verwendet wird, wird der User-Agent alle Vorkommen desselben `autocomplete`-Wertes mit demselben Datenwert automatisch vervollständigen.

Einige Tokens können mehr als einmal mit potenziell unterschiedlichen erwarteten Werten verwendet werden, wie das Token `zip-code` in einem Formular, das sowohl Liefer- als auch Rechnungsadressen enthält. Das Einfügen mehrerer unterschiedlicher Tokens in eine durch Leerzeichen getrennte Liste führt dazu, dass den zugehörigen Formularsteuerelementen eindeutige Autovervollständigungswerte zugewiesen werden: in diesem Fall `autocomplete="shipping zip-code"` und `autocomplete="billing zip-code"`.

Einige Autovervollständigungswerte müssen möglicherweise mehrmals wiederverwendet werden. Beispielsweise kann ein Formular mehrere Lieferadressen enthalten und daher mehrere Vorkommen von `"shipping zip-code"` erwarten, während es dennoch unterschiedliche Werte erwartet. Um den Autovervollständigungswert in diesen Fällen eindeutig zu machen, kann das erste Token in der durch Leerzeichen getrennten Liste von Tokens ein `section-*` Token sein, wobei die ersten acht Zeichen des Tokens immer die Zeichenfolge "section-" sind, gefolgt von einer alphanumerischen Zeichenfolge. Alle Formularfelder, die das `section-*` Token mit derselben alphanumerischen Zeichenfolge haben, gehören zu derselben **benannten Gruppe**.

Wenn Sie das Attribut `autocomplete` auf {{HTMLElement("input/hidden", "hidden")}} Input-Elementen (`<input type="hidden">`) einschließen, muss sein Wert eine geordnete Liste von durch Leerzeichen getrennten Tokens sein; die Schlüsselwörter `on` und `off` sind nicht erlaubt.

Die Quelle der vorgeschlagenen Werte liegt im Allgemeinen beim Browser; typischerweise stammen die Werte von zuvor vom Benutzer eingegebenen Werten, sie können jedoch auch von vorkonfigurierten Werten stammen. Beispielsweise kann ein Browser dem Benutzer die Möglichkeit bieten, seinen Namen, seine Adresse, Telefonnummer und E-Mail-Adressen zu speichern, um Autovervollständigung zu Zwecken der Autovervollständigung zu bieten. Der Browser kann auch die Möglichkeit bieten, verschlüsselte Kreditkarteninformationen zu speichern, um sie nach einem Authentifizierungsverfahren automatisch auszufüllen.

> [!NOTE]
> Das `autocomplete` Attribut steuert auch, ob Firefox - im Gegensatz zu anderen Browsern - [den dynamischen deaktivierten Zustand und (falls zutreffend) die dynamische Ausgewähltheit](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` Elements, eines `<textarea>` Elements oder eines gesamten `<form>` Formulars über Seitenladevorgänge hinweg speichern wird. Die Persistenzfunktion ist standardmäßig aktiviert. Das Setzen des Wertes des `autocomplete` Attributs auf `off` deaktiviert diese Funktion. Dies funktioniert selbst dann, wenn das `autocomplete` Attribut normalerweise aufgrund seines `type` keine Anwendung finden würde. Siehe [Firefox-Bug 654072](https://bugzil.la/654072).

## Werte

Der Attributwert ist entweder das Schlüsselwort `off` oder `on`, oder eine durch Leerzeichen getrennte `<token-list>`, die die Bedeutung des Autovervollständigungswertes beschreibt.

- `off`

  - : Der Browser darf für dieses Feld keinen Wert automatisch eingeben oder auswählen. Es ist möglich, dass das Dokument oder die Anwendung ihre eigene Autovervollständigungsfunktion bereitstellt oder dass Sicherheitsbedenken erfordern, dass der Wert des Feldes nicht automatisch eingegeben wird.

    > [!NOTE]
    > In den meisten modernen Browsern verhindert das Setzen von `autocomplete` auf `"off"` nicht, dass ein Passwort-Manager den Benutzer fragt, ob er Benutzernamen- und Passwortinformationen speichern möchte, oder dass diese Werte in einem Anmeldeformular der Website automatisch ausgefüllt werden. Siehe [Verwalten der Autofill-Funktion für Anmeldefelder](/de/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion#managing_autofill_for_login_fields).

- `on`

  - : Der Browser darf die Eingabe automatisch vervollständigen. Es wird keine Orientierung darüber gegeben, welche Art von Daten im Feld erwartet werden, sodass der Browser sein eigenes Urteil verwenden kann.

- `<token-list>`

  - : Eine geordnete Menge von [durch Leerzeichen getrennten Tokens](#token-listen-tokens), bestehend aus Autofill-Detailstokens, denen optionale Abschnitts- und entweder Rechnungs- oder Versandgruppierungstokens vorausgehen. Telefonnummern, E-Mail-Adressen und Messaging-Protokolltokens werden von einem Token gefolgt, das den Typ des Empfängers identifiziert.

Siehe den [WHATWG-Standard](https://html.spec.whatwg.org/multipage/forms.html#autofill) für detailliertere Informationen.

### Token-Listen-Tokens

Die `<token-list>` Optionen umfassen, in dieser Reihenfolge:

1. [Gruppennamen-Token](#benannte_gruppen)
2. [Gruppierungs-Identifikator](#gruppierungs-identifikator)
3. [Detail-Tokens](#detail-tokens)
4. [Web-Autorisierung](#web-autorisierungs-token)

#### Benannte Gruppen

Um eine benannte Gruppe von Formularfeldern zu erstellen, kann das optionale `section-*` Token verwendet werden. Falls vorhanden, muss dieses Token das erste Token in der durch Leerzeichen getrennten Liste der Tokens sein.

- `section-*`
  - : Definiert den Namen für eine Gruppe von Formularsteuerelementen. Ein Token, dessen erste acht Zeichen die Zeichenfolge "section-" sind, ohne Berücksichtigung von Groß- und Kleinschreibung, gefolgt von zusätzlichen Zeichen. Alle Formularsteuerelemente, die mit demselben Token beginnen, gehören zur benannten Gruppe.

#### Gruppierungs-Identifikator

Ein optionaler `shipping` oder `billing` Gruppierungs-Identifikator

- `shipping`
  - : Das durch folgende Tokens identifizierte Feld ist Teil der Lieferadresse oder Kontaktinformation
- `billing`
  - : Das durch folgende Tokens identifizierte Feld ist Teil der Rechnungsadresse oder Kontaktinformation

#### Detail-Tokens

Jede durch Leerzeichen getrennte Detaillistenliste umfasst entweder einen Empfängertyp mit digitalen Kontaktinformationen in dieser Reihenfolge oder eine durch Leerzeichen getrennte Token-Liste anderer Tokens.

##### Empfängertyp

Die Tokens, die den Empfängertyp identifizieren, umfassen:

- `home`
  - : Der durch folgende Tokens identifizierte Kontakt ist für die Kontaktaufnahme mit dem Empfänger an seinem Wohnsitz.
- `work`
  - : Der durch folgende Tokens identifizierte Kontakt ist für die Kontaktaufnahme mit dem Empfänger an seinem Arbeitsplatz.
- `mobile`
  - : Der durch folgende Tokens identifizierte Kontakt ist für die Kontaktaufnahme mit dem Empfänger unabhängig vom Standort.
- `fax`
  - : Der durch folgende Tokens identifizierte Empfänger ist für ein Faxgerät.
- `page`
  - : Der durch folgende Tokens identifizierte Empfänger ist für einen Pager oder Piepser.

##### Digitale Kontakt-Tokens

Das Token oder die Gruppe von Tokens für Telefonnummern oder die Komponenten einer Nummer, Telefonnebenstellen, E-Mail-Adressen oder Instant-Messaging-Protokolle.

- `tel`

  - : Eine vollständige Telefonnummer, einschließlich der Landesvorwahl. Wenn Sie die Telefonnummer in ihre Komponenten aufteilen müssen, können Sie diese Werte für diese Felder verwenden:
    - `tel-country-code`
      - : Die Landesvorwahl, z.B. "1" für die Vereinigten Staaten, Kanada und andere Gebiete in Nordamerika und Teilen der Karibik.
    - `tel-national`
      - : Die gesamte Telefonnummer ohne die Landesvorwahl, einschließlich eines länderspezifischen Präfixes. Für die Telefonnummer "1-855-555-6502" wäre der Wert dieses Feldes "855-555-6502".
    - `tel-area-code`
      - : Die Ortsvorwahl, mit einem länderspezifischen Präfix, falls zutreffend.
    - `tel-local`
      - : Die Telefonnummer ohne Landes- oder Ortsvorwahl. Diese kann weiter in zwei Teile aufgeteilt werden, für Telefonnummern, die eine Vermittlungsnummer und dann eine Nummer innerhalb der Vermittlung haben. Für die Telefonnummer "555-6502" verwenden Sie `tel-local-prefix` für "555" und `tel-local-suffix` für "6502".

- `tel-extension`
  - : Ein Telefonnebenstellencode innerhalb der Telefonnummer, z.B. eine Raum- oder Suitennummer in einem Hotel oder eine Büronebenstelle in einem Unternehmen.
- `email`
  - : Eine E-Mail-Adresse.
- `impp`
  - : Eine URL für einen Instant-Messaging-Protokoll-Endpunkt, wie z.B. `xmpp:username@example.net`.

##### Andere Tokens

Wenn das Formularfeld keine Telefonnummer, E-Mail-Adresse oder ein Instant-Messaging-Protokoll ist, ist die durch Leerzeichen getrennte Liste von Tokens nicht von einem Kontakttyp vorangestellt:

- `name`

  - : Das Feld erwartet den Wert, den vollständigen Namen einer Person zu enthalten. Die Verwendung von `name` anstelle der Aufteilung des Namens in seine Komponenten wird im Allgemeinen bevorzugt, da dies den Umgang mit der großen Vielfalt menschlicher Namen und deren Strukturierung vermeidet; Sie können jedoch die folgenden `autocomplete` Werte verwenden, wenn Sie den Namen in seine Komponenten aufteilen müssen:

    - `honorific-prefix`
      - : Der Präfix oder Titel, wie "Frau", "Herr", "Fräulein", "Ms.", "Dr.", oder "Mlle.".
    - `given-name`
      - : Der Vorname (oder "erste" Name).
    - `additional-name`
      - : Der Mittelnamen.
    - `family-name`
      - : Der Nachname (oder "letzter" Name).
    - `honorific-suffix`
      - : Der Suffix, wie "Jr.", "B.Sc.", "PhD.", "MBASW", oder "IV".
    - `nickname`
      - : Ein Spitzname oder Benutzername.

- `username`
  - : Ein Benutzername oder Kontoname.
- `new-password`
  - : Ein neues Passwort. Beim Erstellen eines neuen Kontos oder Ändern des Passworts sollte dies für ein Feld "Geben Sie Ihr neues Passwort ein" oder "Bestätigen Sie das neue Passwort" verwendet werden, im Gegensatz zu einem allgemeinen Feld "Geben Sie Ihr aktuelles Passwort ein", das möglicherweise vorhanden ist. Dies kann vom Browser sowohl verwendet werden, um ein versehentliches Ausfüllen eines vorhandenen Passworts zu vermeiden, als auch um bei der Erstellung eines sicheren Passworts zu helfen.
- `current-password`
  - : Das aktuelle Passwort des Benutzers.
- `one-time-code`
  - : Ein Einmalkennwort (OTP) zur Überprüfung der Benutzeridentität, das als zusätzlicher Faktor in einem Anmeldefluss verwendet wird.
    Am häufigsten ist dies ein Code, der über einen außerrichtlichen Mechanismus wie SMS, E-Mail oder Authentifikator-App empfangen wird.
- `organization-title`
  - : Ein Jobtitel oder ein Titel, den eine Person innerhalb einer Organisation hat, wie "Senior Technical Writer", "Präsident", oder "Anleitungstroopführer".
- `organization`
  - : Ein Unternehmens- oder Organisationsname, wie "Acme Widget Company" oder "Pfadfinderinnen von Amerika".
- `street-address`
  - : Eine Straßenadresse. Dies kann mehrere Textzeilen umfassen und sollte den Standort der Adresse innerhalb ihrer zweiten Verwaltungsebene (typischerweise einer Stadt oder einem Dorf) vollständig identifizieren, sollte aber weder den Städtischen Namen, die Postleitzahl noch den Ländernamen enthalten.
    - `address-line1`, `address-line2`, `address-line3`
      - : Jede einzelne Zeile der Straßenadresse. Diese sollten nur vorhanden sein, wenn die `street-address` nicht vorhanden ist.
- `address-level4`
  - : Die feinste [Verwaltungsebene](#verwaltungsebenen_in_adressen), in Adressen, die vier Ebenen haben.
- `address-level3`
  - : Die dritte [Verwaltungsebene](#verwaltungsebenen_in_adressen), in Adressen mit mindestens drei Verwaltungsebenen.
- `address-level2`
  - : Die zweite [Verwaltungsebene](#verwaltungsebenen_in_adressen), in Adressen mit mindestens zwei davon. In Ländern mit zwei Verwaltungsebenen wäre dies typischerweise die Stadt, Gemeinde, Dorf oder eine andere Ortschaft, in der die Adresse liegt.
- `address-level1`
  - : Die erste [Verwaltungsebene](#verwaltungsebenen_in_adressen) in der Adresse. Dies ist typischerweise die Provinz, in der sich die Adresse befindet. In den Vereinigten Staaten wäre dies der Staat. In der Schweiz der Kanton. In Großbritannien die Grafschaft.
- `country`
  - : Ein Länder- oder Gebietscode.
- `country-name`
  - : Ein Länder- oder Gebietsname.
- `postal-code`

  - : Eine Postleitzahl (in den Vereinigten Staaten ist dies der ZIP-Code).

- `cc-name`
  - : Der vollständige Name, wie er auf oder mit einem Zahlungsmittel wie einer Kreditkarte gedruckt ist. Die Verwendung eines vollständigen Namensfelds ist bevorzugt, typischerweise über die Aufteilung des Namens in Teile.
    - `cc-given-name`
      - : Ein Vorname, wie auf einem Zahlungsmittel wie einer Kreditkarte angegeben.
    - `cc-additional-name`
      - : Ein Mittelnamen, wie auf einem Zahlungsmittel oder einer Kreditkarte angegeben.
    - `cc-family-name`
      - : Ein Nachname, wie auf einer Kreditkarte angegeben.
- `cc-number`
  - : Eine Kreditkartennummer oder eine andere Zahl, die ein Zahlungsmittel identifiziert, z.B. eine Kontonummer.
- `cc-exp`
  - : Ein Ablaufdatum des Zahlungsmittels, typischerweise im Format "MM/YY" oder "MM/YYYY".
    - `cc-exp-month`
      - : Der Monat, in dem das Zahlungsmittel abläuft.
    - `cc-exp-year`
      - : Das Jahr, in dem das Zahlungsmittel abläuft.
- `cc-csc`
  - : Der Sicherheitscode für das Zahlungsmittel; bei Kreditkarten ist dies die 3-stellige Verifizierungsnummer auf der Rückseite der Karte.
- `cc-type`
  - : Der Typ des Zahlungsmittels (wie "Visa" oder "Master Card").
- `transaction-currency`
  - : Die Währung, in der die Transaktion stattfinden soll.
- `transaction-amount`
  - : Der Betrag, angegeben in der durch `transaction-currency` spezifizierten Währung, der Transaktion für ein Zahlungsformular.
- `language`
  - : Eine bevorzugte Sprache, angegeben als gültiges [BCP 47-Sprachtag](https://de.wikipedia.org/wiki/IETF-Sprachtag).
- `bday`
  - : Ein Geburtsdatum als vollständiges Datum.
    - `bday-day`
      - : Der Tag des Monats eines Geburtsdatums.
    - `bday-month`
      - : Der Monat des Jahres eines Geburtsdatums.
    - `bday-year`
      - : Das Jahr eines Geburtsdatums.
- `sex`
  - : Eine Geschlechtsidentität (wie "Weiblich", "Fa'afafine", "Hijra", "Männlich", "Nonbinär"), als freiformierter Text ohne neue Zeilen.
- `url`
  - : Eine URL, wie z.B. eine Homepage oder eine Unternehmenswebadresse, je nach Kontext der anderen Felder im Formular.
- `photo`
  - : Die URL eines Bildes, das die Person, das Unternehmen oder die Kontaktinformationen darstellt, die in den anderen Feldern im Formular angegeben sind.

#### Web-Autorisierungs-Token

Mit {{htmlelement("input")}} und {{htmlelement("textarea")}} kann das `webauthn` Token zuletzt eingefügt werden, um anzugeben, dass der User-Agent öffentliche Schlüsseldaten anzeigen soll, wenn der Benutzer mit dem Steuerelement interagiert.

- `webauthn`
  - : Passkeys, die durch die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) generiert werden, wie durch einen bedingten [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) Aufruf angefordert (d.h. einen, der `mediation: 'conditional'` einschließt). Wenn enthalten, ist dies das letzte Token in der durch Leerzeichen getrennten Tokenliste. Siehe [Anmeldung mit einem Passkey über die Autofill-Funktion des Formulars](https://web.dev/articles/passkey-form-autofill) für weitere Details.

## Beispiele

```html
<div>
  <label for="cc-number">Enter your credit card number</label>
  <input name="cc-number" id="cc-number" autocomplete="off" />
</div>
```

### Verwaltungsebenen in Adressen

Die vier Verwaltungsebene Felder (`address-level1` bis `address-level4`) beschreiben die Adresse in Bezug auf zunehmende Präzision innerhalb des Landes, in dem sich die Adresse befindet. Jedes Land hat ein eigenes System von Verwaltungsebenen und kann die Ebenen in unterschiedlicher Reihenfolge anordnen, wenn Adressen geschrieben werden.

`address-level1` repräsentiert immer die breiteste Verwaltungseinheit; es ist der am wenigsten spezifische Teil der Adresse, abgesehen vom Ländernamen.

### Flexibilität des Formularlayouts

Da verschiedene Länder ihre Adresse auf unterschiedliche Weise schreiben, mit jedem Feld an unterschiedlichen Stellen innerhalb der Adresse und sogar unterschiedlichen Sets von Feldern und deren Anzahl, kann es hilfreich sein, wenn Ihre Seite in der Lage ist, in das Layout zu wechseln, das von Ihren Nutzern erwartet wird, wenn Sie ein Adresseneingabeformular bereitstellen, je nachdem, in welchem Land die Adresse liegt.

### Variationen

Die Art und Weise, wie jede Verwaltungsebene verwendet wird, variiert von Land zu Land. Im Folgenden einige Beispiele; dies ist nicht als erschöpfende Liste gedacht.

#### Vereinigte Staaten

Eine typische Wohnadresse in den Vereinigten Staaten sieht so aus:

432 Irgendwo St
Beispielstadt CA 95555

In den Vereinigten Staaten ist der am wenigsten spezifische Teil der Adresse der Staat, in diesem Fall "CA" (die offizielle Abkürzung des US Postal Service für "California"). Somit ist `address-level1` der Staat oder "CA" in diesem Fall.

Der zweitwenig spezifische Teil der Adresse ist der Städte- oder Ortsname, sodass `address-level2` "Beispielstadt" in diesem Beispieladresse ist.

US-amerikanische Adressen verwenden die Ebenen 3 und darüber hinaus nicht.

#### Vereinigtes Königreich

Adressformulare im Vereinigten Königreich sollten eine oder zwei Adress-Ebenen und eine, zwei oder drei Adresszeilen enthalten, abhängig von der Adresse. Eine vollständige Adresse sieht so aus:

103 Frogmarch Street
Upper-Wapping
Winchelsea
Whereshire
TN99 8ZZ

Die Adressstufen sind:

- `address-level1`: Die Grafschaft — in diesem Fall "Whereshire".
- `address-level2`: Der Postort — in diesem Fall "Winchelsea".
- `address-line2`: Die Ortschaft — in diesem Fall "Upper-Wapping".
- `address-line1`: Die Haus-/Straßendetails — "103 Frogmarch Street".

Der Postcode ist separat. Beachten Sie, dass Sie tatsächlich nur den Postcode und `address-line1` verwenden können, um Post im Vereinigten Königreich erfolgreich zuzustellen, sodass sie die einzigen obligatorischen Elemente sein sollten, obwohl Menschen normalerweise dazu neigen, mehr Details bereitzustellen.

#### China

China kann bis zu drei Verwaltungsebenen verwenden: die Provinz, die Stadt und den Bezirk.

Die 6-stellige Postleitzahl ist nicht immer erforderlich, aber wenn sie angegeben wird, wird sie zur Klarstellung separat mit einem Label platziert. Zum Beispiel:

北京市东城区建国门北大街 8 号华润大厦 17 层 1708 单元
邮编：100005

#### Japan

Eine Adresse in Japan wird typischerweise **in einer Zeile geschrieben**, in einer Reihenfolge von den am wenigsten spezifischen zu spezifischeren Teilen (im **umgekehrten Fall der Vereinigten Staaten**). Es gibt zwei oder drei Verwaltungsebenen in einer Adresse. Eine zusätzliche Zeile kann verwendet werden, um Gebäudenamen und Raumnummern anzuzeigen. Die Postleitzahl ist separat. Zum Beispiel:

〒 381-0000
長野県長野市某町 123

"〒" und die folgenden sieben Ziffern zeigen die Postleitzahl.

`address-level1` ist für Präfekturen oder die Metropole Tokio verwendet; "長野県" (Präfektur Nagano) ist in diesem Fall gemeint. `address-level2` wird typischerweise für Städte, Landkreise, Ortschaften und Dörfer verwendet; "長野市" (Stadt Nagano) in diesem Fall. "某町 123" ist `address-line1`, das aus einem Gebietsnamen und einer Grundstücksnummer besteht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{htmlelement("input")}} Element
- Das {{htmlelement("select")}} Element
- Das {{htmlelement("textarea")}} Element
- Das {{htmlelement("form")}} Element
- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
