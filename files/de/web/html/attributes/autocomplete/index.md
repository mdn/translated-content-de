---
title: "HTML-Attribut: autocomplete"
short-title: autocomplete
slug: Web/HTML/Attributes/autocomplete
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{HTMLSidebar}}

Das HTML-Attribut `autocomplete` ermöglicht es Webentwicklern anzugeben, ob und in welchem Umfang der {{Glossary("user agent")}} automatisierte Unterstützung beim Ausfüllen von Formularfeldwerten leisten darf, sowie eine Anleitung für den Browser bezüglich der Art der erwarteten Informationen im Feld zu geben.

Dieses Attribut ist verfügbar für {{HTMLElement("input")}}-Elemente, die Text- oder numerische Werte als Eingabe akzeptieren, {{HTMLElement("textarea")}}-Elemente, {{HTMLElement("select")}}-Elemente und {{HTMLElement("form")}}-Elemente.

{{EmbedInteractiveExample("pages/tabbed/attribute-autocomplete.html", "tabbed-shorter")}}

## Beschreibung

Das Attribut `autocomplete` bietet dem User Agent einen Hinweis, wie oder ob ein Formularsteuerfeld vorausgefüllt werden soll. Der Attributwert kann entweder das Schlüsselwort `off` oder `on` sein oder eine geordnete Liste von durch Leerzeichen getrennten Token.

```html
<input autocomplete="off" />
<input autocomplete="on" />
<input autocomplete="shipping street-address" />
<input autocomplete="section-user1 billing postal-code" />
```

Wenn ein {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}} Element kein `autocomplete` Attribut hat, verwendet der Browser das [`autocomplete` Attribut des **besitzenden Formulars** des Elements](/de/docs/Web/HTML/Element/form#autocomplete). Das besitzende Formular ist entweder das {{HTMLElement("form")}}, das mit der durch das Attribut [`form`](/de/docs/Web/HTML/Element/input#form) des Elements (falls vorhanden) angegebenen `id` übereinstimmt, oder, häufiger, das Formular (`<form>`), in dem das Element verschachtelt ist.

> [!NOTE]
> Um Autovervollständigung zu ermöglichen, könnten User-Agents verlangen, dass `<input>`/`<select>`/`<textarea>` Elemente:
>
> 1. Ein `name` und/oder `id` Attribut haben
> 2. Nachkommenschaft eines `<form>` Elements sind
> 3. Von einem Formular mit einem {{HTMLElement("input/submit", "submit")}} Button verwaltet werden

Wenn dieselbe Token-Liste in mehr als einem Formularsteuerfeld verwendet wird, vervollständigt der User-Agent alle Vorkommen desselben `autocomplete` Wertes mit demselben Datenwert.

Einige Token können mehrmals mit möglicherweise unterschiedlichen erwarteten Werten verwendet werden, wie das `zip-code` Token in einem Formular, das sowohl Versand- als auch Rechnungsadressen enthält. Die Verwendung mehrerer unterschiedlicher Token in einer durch Leerzeichen getrennten Liste führt dazu, dass die zugehörigen Formularsteuerfelder eindeutige Autovervollständigungswerte erhalten: in diesem Fall `autocomplete="shipping zip-code"` und `autocomplete="billing zip-code"`.

Einige Autovervollständigungswerte müssen möglicherweise mehrmals verwendet werden. Beispielsweise kann ein Formular mehrere Versandadressen enthalten und daher mehrere Vorkommen von `"shipping zip-code"` erwarten, aber dennoch unterschiedliche Werte erwarten. Um den Autovervollständigungswert in diesen Fällen eindeutig zu machen, kann das erste Token in der durch Leerzeichen getrennten Token-Liste ein `section-*` Token sein, wobei die ersten acht Zeichen des Tokens immer die Zeichenkette "section-" sind, gefolgt von einer alphanumerischen Zeichenkette. Alle Formularfelder mit dem `section-*` Token mit derselben alphanumerischen Zeichenkette gehören zur selben **benannten Gruppe**.

Wenn das `autocomplete` Attribut zu {{HTMLElement("input/hidden", "hidden")}} Eingabeelementen (`<input type="hidden">`) hinzugefügt wird, muss sein Wert eine geordnete Liste von durch Leerzeichen getrennten Token sein; die Schlüsselwörter `on` und `off` sind nicht erlaubt.

Die Quelle der vorgeschlagenen Werte liegt im Allgemeinen im Ermessen des Browsers; typischerweise stammen die Werte aus zuvor vom Benutzer eingegebenen Werten, sie können aber auch aus vorkonfigurierten Werten stammen. Beispielsweise könnte ein Browser es dem Benutzer erlauben, seinen Namen, seine Adresse, Telefonnummer und E-Mail-Adressen zu speichern, um Autovervollständigungszwecke zu erfüllen. Der Browser kann auch die Möglichkeit bieten, verschlüsselte Kreditkarteninformationen zu speichern, zur Autovervollständigung nach einem Authentifizierungsverfahren.

> [!NOTE]
> Das Attribut `autocomplete` steuert auch, ob Firefox— im Gegensatz zu anderen Browsern — [den dynamischen deaktivierten Zustand und (falls zutreffend) die dynamische Auswahl] (https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>` Elements, `<textarea>` Elements oder gesamten `<form>` über Seitenladevorgänge hinweg speichert. Die Persistenzfunktion ist standardmäßig aktiviert. Das Setzen des Wertes des `autocomplete` Attributs auf `off` deaktiviert diese Funktion. Dies funktioniert auch dann, wenn das `autocomplete` Attribut normalerweise aufgrund seines `type` nicht angewendet werden würde. Siehe [Firefox Bug 654072](https://bugzil.la/654072).

## Werte

Der Attributwert kann entweder das Schlüsselwort `off` oder `on` sein oder eine durch Leerzeichen getrennte `<token-list>`, die die Bedeutung des Autovervollständigungswerts beschreibt.

- `off`

  - : Der Browser darf für dieses Feld nicht automatisch einen Wert eingeben oder auswählen. Es ist möglich, dass das Dokument oder die Anwendung eine eigene Autovervollständigungsfunktion bereitstellt oder dass Sicherheitsbedenken erfordern, dass der Wert des Feldes nicht automatisch eingegeben wird.

    > [!NOTE]
    > In den meisten modernen Browsern verhindert das Setzen von `autocomplete` auf `"off"` nicht, dass der Passwortmanager den Benutzer fragt, ob er die Benutzername- und Passwortinformationen speichern möchte, oder dass diese Werte automatisch in einem Anmeldeformular einer Website ausgefüllt werden. Siehe [Verwaltung der Autovervollständigung für Anmeldefelder](/de/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion#managing_autofill_for_login_fields).

- `on`

  - : Der Browser darf das Eingabefeld automatisch ausfüllen. Es gibt keine Anweisungen bezüglich der Art der im Feld erwarteten Daten, sodass der Browser nach eigenem Ermessen handeln kann.

- `<token-list>`

  - : Ein geordneter Satz von [durch Leerzeichen getrennten Token](#token-liste-token), bestehend aus Autovervollständigungsdetailtoken, die von optionalen Abschnitts- und entweder Rechnungs- oder Versandgruppierungstoken vorangestellt werden. Telefonnummern, E-Mail-Adressen und Messaging-Protokolltoken werden durch ein Token identifiziert, das den Empfängertyp bestimmt.

Siehe den [WHATWG Standard](https://html.spec.whatwg.org/multipage/forms.html#autofill) für detailliertere Informationen.

### Token-Liste-Token

Die Optionen der `<token-list>`-Liste umfassen, in der Reihenfolge:

1. [Gruppennachweistoken](#benannte_gruppen)
2. [Gruppierungsidentifikator](#gruppierungsidentifikator)
3. [Detail-Token](#detail-token)
4. [Web-Authentifizierungstoken](#web-authentifizierungstoken)

#### Benannte Gruppen

Um eine benannte Gruppe von Formularfeldern zu erstellen, kann das optionale `section-*` Token verwendet werden. Wenn vorhanden, muss dieses Token das erste Token in der durch Leerzeichen getrennten Liste von Token sein.

- `section-*`
  - : Definiert den Namen für eine Gruppe von Formularsteuerungen. Ein Token, dessen erste acht Zeichen die Zeichenkette "section-" sind, unabhängig von der Groß- und Kleinschreibung, gefolgt von weiteren Zeichen. Alle Formularsteuerungen, die mit demselben Token beginnen, gehören zur benannten Gruppe.

#### Gruppierungsidentifikator

Ein optionaler `shipping` oder `billing` Gruppierungsidentifikator

- `shipping`
  - : Das Feld, das durch nachfolgende Token identifiziert wird, ist Teil der Versandadresse oder Kontaktinformationen.
- `billing`
  - : Das Feld, das durch nachfolgende Token identifiziert wird, ist Teil der Rechnungsadresse oder Kontaktinformationen.

#### Detail-Token

Jede durch Leerzeichen getrennte Detailtoken-Liste umfasst entweder einen Empfängertyp mit digitalen Kontaktinformationen in dieser Reihenfolge oder eine durch Leerzeichen getrennte Tokenliste anderer Token.

##### Empfängertyp

Die Token, die den Empfängertyp identifizieren, umfassen:

- `home`
  - : Der Kontakttyp, der durch nachfolgende Token identifiziert wird, dient dem Kontaktieren des Empfängers zu Hause.
- `work`
  - : Der Kontakttyp, der durch nachfolgende Token identifiziert wird, dient dem Kontaktieren des Empfängers bei der Arbeit.
- `mobile`
  - : Der Kontakttyp, der durch nachfolgende Token identifiziert wird, dient dem Kontaktieren des Empfängers unabhängig vom Standort.
- `fax`
  - : Der Empfänger, der durch nachfolgende Token identifiziert wird, ist ein Faxgerät.
- `page`
  - : Der Empfänger, der durch nachfolgende Token identifiziert wird, ist ein Pager oder Beeper.

##### Digitale Kontakt-Token

Das Token oder die Gruppe von Token für Telefonnummern oder die Komponenten einer Nummer, Telefonerweiterungen, E-Mail-Adressen oder Instant-Messaging-Protokolle.

- `tel`

  - : Eine vollständige Telefonnummer, einschließlich der Landesvorwahl. Wenn Sie die Telefonnummer in ihre Komponenten zerlegen müssen, können Sie diese Werte für diese Felder verwenden:
    - `tel-country-code`
      - : Der Ländercode, wie zum Beispiel "1" für die Vereinigten Staaten, Kanada und andere Gebiete in Nordamerika und Teile der Karibik.
    - `tel-national`
      - : Die gesamte Telefonnummer ohne die Komponente der Landesvorwahl, einschließlich eines landesinternen Präfixes. Für die Telefonnummer "1-855-555-6502" wäre der Wert dieses Feldes "855-555-6502".
    - `tel-area-code`
      - : Die Vorwahl, mit dem entsprechenden landesinternen Präfix, falls zutreffend.
    - `tel-local`
      - : Die Telefonnummer ohne Landes- oder Vorwahl. Diese kann weiter in zwei Teile unterteilt werden, für Telefonnummern, die eine Vermittlungsnummer und dann eine Nummer innerhalb der Vermittlung haben. Für die Telefonnummer "555-6502" verwenden Sie `tel-local-prefix` für "555" und `tel-local-suffix` für "6502".

- `tel-extension`
  - : Ein Telefonerweiterungscode innerhalb der Telefonnummer, wie eine Zimmer- oder Suitennummer in einem Hotel oder eine Bürodurchwahl in einem Unternehmen.
- `email`
  - : Eine E-Mail-Adresse.
- `impp`
  - : Eine URL für einen Instant-Messaging-Protokollendpunkt, wie `xmpp:username@example.net`.

##### Andere Token

Wenn das Formularfeld keine Telefonnummer, E-Mail-Adresse oder kein Instant-Messaging-Protokoll ist, wird die durch Leerzeichen getrennte Liste der Token nicht von einem Kontakttyp vorangestellt:

- `name`

  - : Das Feld erwartet den Wert, dass es sich um einen vollständigen Namen einer Person handelt. Die Verwendung von `name` anstelle der Aufschlüsselung des Namens in seine Komponenten ist im Allgemeinen bevorzugt, da dies den Umgang mit der großen Vielfalt menschlicher Namen und deren Strukturierung verhindert; es können jedoch die folgenden `autocomplete` Werte verwendet werden, wenn der Name in seine Komponenten aufgeschlüsselt werden muss:

    - `honorific-prefix`
      - : Das Präfix oder der Titel, wie "Mrs.", "Mr.", "Miss", "Ms.", "Dr." oder "Mlle.".
    - `given-name`
      - : Der Vorname.
    - `additional-name`
      - : Der zweite Vorname.
    - `family-name`
      - : Der Nachname.
    - `honorific-suffix`
      - : Der Suffix, wie "Jr.", "B.Sc.", "PhD.", "MBASW" oder "IV".
    - `nickname`
      - : Ein Spitzname oder Pseudonym.

- `username`
  - : Ein Benutzername oder ein Konto-Name.
- `new-password`
  - : Ein neues Passwort. Beim Erstellen eines neuen Kontos oder beim Ändern von Passwörtern sollte dies für ein Feld "Geben Sie Ihr neues Passwort ein" oder "Bestätigen Sie neues Passwort" verwendet werden, im Gegensatz zu einem allgemeinen Feld "Geben Sie Ihr aktuelles Passwort ein", das möglicherweise vorhanden ist. Dies kann vom Browser sowohl verwendet werden, um das versehentliche Ausfüllen eines vorhandenen Passworts zu vermeiden, als auch um Unterstützung bei der Erstellung eines sicheren Passworts zu bieten.
- `current-password`
  - : Das aktuelle Passwort des Benutzers.
- `one-time-code`
  - : Ein einmaliges Passwort (OTP) zur Überprüfung der Benutzeridentität, das als zusätzlicher Faktor in einem Anmeldevorgang verwendet wird.
    Am häufigsten ist dies ein Code, der über einen anderen Kanal, wie SMS, E-Mail oder Authentifizierungsanwendung, empfangen wird.
- `organization-title`
  - : Ein Jobtitel oder der Titel einer Person innerhalb einer Organisation, wie "Senior Technischer Redakteur", "Präsident" oder "Teamleiter-Assistent".
- `organization`
  - : Ein Unternehmens- oder Organisationsname, wie "Acme Widget Company" oder "Pfadfinderinnen von Amerika".
- `street-address`
  - : Eine Straßenadresse. Dies kann mehrere Textzeilen umfassen und sollte den Standort der Adresse innerhalb seiner zweiten Verwaltungsebene (normalerweise eine Stadt oder ein Ort) vollständig identifizieren, aber nicht den Stadtnamen, die Postleitzahl oder den Ländernamen enthalten.
    - `address-line1`, `address-line2`, `address-line3`
      - : Jede einzelne Zeile der Straßenadresse. Diese sollten nur vorhanden sein, wenn die `street-address` nicht vorhanden ist.
- `address-level4`
  - : Die feinste [Verwaltungsebene](#verwaltungsebenen_in_adressen), in Adressen mit vier Ebenen.
- `address-level3`
  - : Die dritte [Verwaltungsebene](#verwaltungsebenen_in_adressen), in Adressen mit mindestens drei Verwaltungsebenen.
- `address-level2`
  - : Die zweite [Verwaltungsebene](#verwaltungsebenen_in_adressen), in Adressen mit mindestens zwei von ihnen. In Ländern mit zwei Verwaltungsebenen wäre dies typischerweise die Stadt, der Ort, das Dorf oder die andere lokale Einheit, in der sich die Adresse befindet.
- `address-level1`
  - : Die erste [Verwaltungsebene](#verwaltungsebenen_in_adressen) in der Adresse. Dies ist typischerweise die Provinz, in der sich die Adresse befindet. In den Vereinigten Staaten wäre dies der Bundesstaat. In der Schweiz der Kanton. Im Vereinigten Königreich die Poststadt.
- `country`
  - : Ein Länder- oder Gebietscode.
- `country-name`
  - : Ein Länder- oder Gebietsname.
- `postal-code`

  - : Eine Postleitzahl (in den Vereinigten Staaten ist dies die PLZ).

- `cc-name`
  - : Der vollständige Name, wie er auf oder mit einem Zahlungsmittel wie einer Kreditkarte gedruckt ist. Die Verwendung eines vollständigen Namensfeldes ist typischerweise bevorzugt, gegenüber der Aufteilung des Namens in Teile.
    - `cc-given-name`
      - : Ein Vorname, wie auf einem Zahlungsmittel wie einer Kreditkarte angegeben.
    - `cc-additional-name`
      - : Ein zweiter Vorname, wie auf einem Zahlungsmittel oder einer Kreditkarte angegeben.
    - `cc-family-name`
      - : Ein Nachname, wie auf einer Kreditkarte angegeben.
- `cc-number`
  - : Eine Kreditkartennummer oder eine andere Nummer, die eine Zahlungsmethode identifiziert, wie eine Kontonummer.
- `cc-exp`
  - : Ein Ablaufdatum der Zahlungsmethode, typischerweise in der Form "MM/JJ" oder "MM/JJJJ".
    - `cc-exp-month`
      - : Der Monat, in dem die Zahlungsmethode abläuft.
    - `cc-exp-year`
      - : Das Jahr, in dem die Zahlungsmethode abläuft.
- `cc-csc`
  - : Der Sicherheitscode für das Zahlungsmittel; auf Kreditkarten ist dies die dreistellige Prüfnummer auf der Rückseite der Karte.
- `cc-type`
  - : Die Art des Zahlungsmittels (wie "Visa" oder "Master Card").
- `transaction-currency`
  - : Die Währung, in der die Transaktion stattfinden soll.
- `transaction-amount`
  - : Der Betrag, angegeben in der von `transaction-currency` bestimmten Währung, der Transaktion für ein Bezahlformular.
- `language`
  - : Eine bevorzugte Sprache, angegeben als gültiger [BCP 47 Sprachcode](https://de.wikipedia.org/wiki/IETF-Sprachcode).
- `bday`
  - : Ein Geburtsdatum, als vollständiges Datum.
    - `bday-day`
      - : Der Tag des Monats eines Geburtsdatums.
    - `bday-month`
      - : Der Monat des Jahres eines Geburtsdatums.
    - `bday-year`
      - : Das Jahr eines Geburtsdatums.
- `sex`
  - : Eine Geschlechtsidentität (wie "Weiblich", "Fa'afafine", "Hijra", "Männlich", "Nicht-binär"), als Freitext ohne Zeilenumbrüche.
- `url`
  - : Eine URL, wie eine Homepage oder die Website-Adresse eines Unternehmens, die im Kontext der anderen Felder im Formular angemessen ist.
- `photo`
  - : Die URL eines Bildes, das die in den anderen Feldern im Formular angegebenen Person, das Unternehmen oder die Kontaktinformationen darstellt.

#### Web-Authentifizierungstoken

Mit {{htmlelement("input")}} und {{htmlelement("textarea")}} kann das `webauthn` Token zuletzt eingeschlossen werden, um anzugeben, dass der User-Agent öffentliche Schlüssel-Anmeldeinformationen anzeigen soll, wenn der Benutzer mit der Steuerung interagiert.

- `webauthn` {{experimental_inline}}
  - : Sicherheitsschlüssel, die von der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) generiert werden, wie von einem bedingten {{domxref("CredentialsContainer.get()", "navigator.credentials.get()")}} Aufruf angefordert (d.h. ein solcher, der `mediation: 'conditional'` enthält). Wenn enthalten, ist dies das letzte Token in der durch Leerzeichen getrennten Tokenliste. Siehe [Anmeldung mit einem Sicherheitsschlüssel über Formular-Autovervollständigung](https://web.dev/articles/passkey-form-autofill) für weitere Details.

## Beispiele

```html
<div>
  <label for="cc-number">Geben Sie Ihre Kreditkartennummer ein</label>
  <input name="cc-number" id="cc-number" autocomplete="off" />
</div>
```

### Verwaltungsebenen in Adressen

Die vier Verwaltungsfelder (`address-level1` bis `address-level4`) beschreiben die Adresse in Bezug auf zunehmende Genauigkeitsgrade innerhalb des Landes, in dem sich die Adresse befindet. Jedes Land hat sein eigenes System von Verwaltungsebenen und kann die Ebenen in unterschiedlicher Reihenfolge anordnen, wenn Adressen geschrieben werden.

`address-level1` stellt immer die breiteste Verwaltungseinheit dar; es ist der am wenigsten spezifische Teil der Adresse, abgesehen vom Ländernamen.

### Flexibilität beim Formularlayout

Da verschiedene Länder ihre Adressen auf unterschiedliche Weise schreiben, mit jedem Feld an unterschiedlichen Stellen innerhalb der Adresse und sogar unterschiedlichen Sets und Zahlen von Feldern insgesamt, kann es hilfreich sein, wenn es möglich ist, dass Ihre Site in der Lage ist, das Layout zu wechseln, das von Ihren Benutzern erwartet wird, wenn ein Adresseneingabeformular präsentiert wird, das sich auf das Land bezieht, in dem sich die Adresse befindet.

### Variationen

Die Verwendung jedes Verwaltungsebene wird von Land zu Land unterschiedlich sein. Unten sind einige Beispiele; dies ist nicht als vollständige Liste gedacht.

#### Vereinigte Staaten

Eine typische Wohnadresse in den Vereinigten Staaten sieht folgendermaßen aus:

432 Anywhere St
Exampleville CA 95555

In den Vereinigten Staaten ist der am wenigsten spezifische Teil der Adresse der Bundesstaat, in diesem Fall "CA" (die offizielle Abkürzung des US Postal Service für "Kalifornien"). Daher ist `address-level1` der Bundesstaat oder "CA" in diesem Fall.

Der zweitwenigst spezifische Teil der Adresse ist der Stadt- oder Ortsname, daher ist `address-level2` "Exampleville" in dieser Beispieladresse.

Adressen in den Vereinigten Staaten verwenden keine Ebenen 3 und höher.

#### Vereinigtes Königreich

Adresseneingabeformulare in Großbritannien sollten eine Adressenebene und ein, zwei oder drei Adresszeilen enthalten, abhängig von der Adresse. Eine vollständige Adresse sähe so aus:

103 Frogmarch Street
Upper-Wapping
Winchelsea
TN99 8ZZ

Die Adresseneinheiten sind:

- `address-level1`: Die Poststadt — "Winchelsea" in diesem Fall.
- `address-line2`: Die Lokalität — "Upper-Wapping" in diesem Fall.
- `address-line1`: Die Haus-/Straßeneinzelheiten — "103 Frogmarch Street".

Die Postleitzahl ist separat. Beachten Sie, dass Sie tatsächlich nur die Postleitzahl und `address-line1` verwenden können, um Post erfolgreich im Vereinigten Königreich zuzustellen, daher sollten sie die einzigen verpflichtenden Elemente sein, aber normalerweise neigen die Menschen dazu, mehr Details anzugeben.

#### China

China kann bis zu drei Verwaltungsebenen verwenden: die Provinz, die Stadt und den Bezirk.

Die sechsstellige Postleitzahl ist nicht immer erforderlich, aber wenn sie angegeben wird, wird sie zur Klarheit separat mit einem Etikett platziert. Zum Beispiel:

北京市东城区建国门北大街 8 号华润大厦 17 层 1708 单元
邮编：100005

#### Japan

Eine Adresse in Japan wird typischerweise **in einer Zeile** geschrieben, in einer Reihenfolge vom am wenigsten spezifischen zum spezifischeren Teil (im **umgekehrten Stil zu den Vereinigten Staaten**). Es gibt zwei oder drei Verwaltungsebenen in einer Adresse. Eine zusätzliche Zeile kann verwendet werden, um Gebäudenamen und Raumnummern anzuzeigen. Die Postleitzahl ist separat. Zum Beispiel:

〒 381-0000
長野県長野市某町 123

"〒" und die folgenden sieben Ziffern zeigen die Postleitzahl an.

`address-level1` wird für Präfekturen oder die Metropole Tokio verwendet; "長野県" (Nagano Präfektur) ist in diesem Fall. `address-level2` wird in der Regel für Städte, Kreise, Städte und Dörfer verwendet; "長野市" (Nagano Stadt) in diesem Fall. "某町 123" ist `address-line1`, das aus einem Bereichsnamen und einer Losnummer besteht.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Das {{htmlelement("input")}} Element
- Das {{htmlelement("select")}} Element
- Das {{htmlelement("textarea")}} Element
- Das {{htmlelement("form")}} Element
- [HTML-Formulare](/de/docs/Learn/Forms)
- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes)
