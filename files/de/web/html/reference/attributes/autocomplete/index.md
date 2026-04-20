---
title: "`autocomplete` HTML-Attribut"
short-title: autocomplete
slug: Web/HTML/Reference/Attributes/autocomplete
l10n:
  sourceCommit: b50ed7ac1c2ca21b4b5cfb594474a17da3f2e6c2
---

Das HTML-Attribut `autocomplete` ermöglicht es Webentwicklern, festzulegen, ob und in welchem Umfang der {{Glossary("user_agent", "User Agent")}} das automatische Ausfüllen von Formularfeldern unterstützen darf. Gleichzeitig gibt es dem Browser Hinweise auf die Art der in einem Feld erwarteten Informationen.

Es ist verfügbar für {{HTMLElement("input")}}-Elemente, die einen Text- oder Zahlenwert als Eingabe erhalten, {{HTMLElement("textarea")}}-Elemente, {{HTMLElement("select")}}-Elemente und {{HTMLElement("form")}}-Elemente.

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

Das Attribut `autocomplete` gibt dem User Agent einen Hinweis, wie, oder ob überhaupt, ein Formularfeld vorausgefüllt werden soll. Der Attributwert ist entweder das Schlüsselwort `off` oder `on` oder eine geordnete Liste von Leerzeichen-getrennten Token.

```html
<input autocomplete="off" />
<input autocomplete="on" />
<textarea autocomplete="shipping street-address"></textarea>
<input autocomplete="section-user1 billing postal-code" />
```

Wenn ein {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}}-Element kein `autocomplete`-Attribut hat, verwendet der Browser das [`autocomplete`-Attribut des **besitzenden Formulars** des Elements](/de/docs/Web/HTML/Reference/Elements/form#autocomplete). Das besitzende Formular ist entweder das {{HTMLElement("form")}}, das mit der durch das [`form`](/de/docs/Web/HTML/Reference/Attributes/form)-Attribut des Elements (falls vorhanden) spezifizierten `id` übereinstimmt, oder, häufiger, das `<form>`, in das das Element eingebettet ist.

> [!NOTE]
> Um Autovervollständigung bereitzustellen, könnte es erforderlich sein, dass `<input>`/`<select>`/`<textarea>`-Elemente:
>
> 1. Ein `name`- und/oder `id`-Attribut haben
> 2. Nachkommen eines `<form>`-Elements sind
> 3. Zu einem Formular gehören, das einen {{HTMLElement("input/submit", "submit")}}-Button hat

Wenn das gleiche Token-Set in mehr als einem Formularfeld verwendet wird, füllt der User Agent alle Vorkommen desselben `autocomplete`-Werts mit demselben Datenwert aus.

Manche Token können mit potenziell unterschiedlichen erwarteten Werten mehrmals verwendet werden, wie beispielsweise das Token `zip-code` in einem Formular, das sowohl Liefer- als auch Rechnungsadressen enthält. Wenn mehrere unterschiedliche Token in einer Leerzeichen-getrennten Liste enthalten sind, erhalten die zugehörigen Formularfelder einzigartige Autovervollständigungswerte: in diesem Fall `autocomplete="shipping zip-code"` und `autocomplete="billing zip-code"`.

Einige Autovervollständigungswerte müssen möglicherweise mehrfach verwendet werden. Zum Beispiel kann ein Formular mehrere Lieferadressen enthalten und daher mehrfache Vorkommen von `"shipping zip-code"` erwarten, während dennoch verschiedene Werte erwartet werden. Um den Autovervollständigungswert in diesen Fällen eindeutig zu machen, kann das erste Token in der Leerzeichen-getrennten Tokensequenz ein `section-*`-Token sein, bei dem die ersten acht Zeichen immer der String "section-" sind, gefolgt von einem alphanumerischen String. Alle Formularfelder, die das `section-*`-Token mit demselben alphanumerischen String erhalten, gehören zur selben **benannten Gruppe**.

Falls das `autocomplete`-Attribut auf {{HTMLElement("input/hidden", "hidden")}}-Input-Elementen (`<input type="hidden">`) enthalten ist, muss sein Wert eine geordnete Liste von Leerzeichen-getrennten Token sein; die Schlüsselwörter `on` und `off` sind nicht erlaubt.

Die Quelle der vorgeschlagenen Werte ist generell dem Browser überlassen; typischerweise stammen Werte von vergangenen Benutzereingaben, aber sie können auch von voreingestellten Werten kommen. Beispielsweise könnte ein Browser dem Benutzer erlauben, seinen Namen, Adresse, Telefonnummer und E-Mail-Adressen für Autovervollständigungszwecke zu speichern. Der Browser kann auch die Möglichkeit bieten, verschlüsselte Kreditkartendaten zu speichern, um sie nach einem Authentifizierungsverfahren automatisch auszufüllen.

> [!NOTE]
> Das `autocomplete`-Attribut kontrolliert auch, ob Firefox — im Gegensatz zu anderen Browsern — [den dynamischen deaktivierten Zustand und (sofern zutreffend) die dynamische Markierung](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>`-Elements, eines `<textarea>`-Elements oder eines gesamten `<form>` über Seitenladungen hinweg speichert. Die Persistenzfunktion ist standardmäßig aktiviert. Das Setzen des `autocomplete`-Attributwerts auf `off` deaktiviert diese Funktion. Dies funktioniert auch, wenn das `autocomplete`-Attribut normalerweise aufgrund seines `type` nicht angewendet werden würde. Siehe [Firefox-Bug 654072](https://bugzil.la/654072).

## Wert

Der Attributwert ist entweder das Schlüsselwort `off` oder `on` oder eine Leerzeichen-getrennte `<token-list>`, die die Bedeutung des Autovervollständigungswerts beschreibt.

- `off`
  - : Der Browser darf nicht automatisch einen Wert für dieses Feld eingeben oder auswählen. Es ist möglich, dass das Dokument oder die Anwendung seine eigene Autovervollständigungsfunktion bietet oder dass Sicherheitsbedenken erfordern, dass der Feldwert nicht automatisch eingegeben wird.

    > [!NOTE]
    > In den meisten modernen Browsern verhindert das Setzen von `autocomplete` auf `"off"` nicht, dass ein Passwort-Manager den Benutzer fragt, ob er Benutzername und Passwort speichern möchte, oder dass diese Werte automatisch in ein Anmeldeformular der Seite eingetragen werden. Siehe [Verwalten der Autovervollständigung für Anmeldefelder](/de/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion#managing_autofill_for_login_fields).

- `on`
  - : Der Browser darf die Eingabe automatisch vervollständigen. Es werden keine Hinweise auf die Art der erwarteten Daten im Feld gegeben, sodass der Browser sein eigenes Urteilsvermögen nutzen kann.

- `<token-list>`
  - : Eine geordnete Menge von [Leerzeichen-getrennten Token](#token-listen-token), bestehend aus Autofill-Detail-Token, vorangestellt von optionalen Sectioning- und entweder Billing- oder Shipping-Gruppierungs-Token. Telefonnummern, E-Mail-Adressen und Messagingprotokoll-Token werden von einem Token eingeleitet, das den Typ des Empfängers angibt.

Nähere Informationen finden Sie im [WHATWG-Standard](https://html.spec.whatwg.org/multipage/forms.html#autofill).

### Token-Listen-Token

Die `<token-list>`-Optionen umfassen, in der Reihenfolge:

1. [Gruppenbenennungstoken](#benannte_gruppen)
2. [Gruppenidentifikator](#gruppenidentifikator)
3. [Detail-Token](#detail-token)
4. [Web-Autorisierung](#web-autorisierungs-token)

#### Benannte Gruppen

Um eine benannte Gruppe von Formularfeldern zu erstellen, kann das optionale `section-*` Token verwendet werden. Sollte es vorhanden sein, muss dieses Token das erste in der Leerzeichen-getrennten Tokensequenz sein.

- `section-*`
  - : Definiert den Namen für eine Gruppe von Formularsteuerelementen. Ein Token, dessen erste acht Zeichen der unveränderliche String "section-" sind, gefolgt von weiteren Zeichen. Alle Formularsteuerelemente, die mit demselben Token beginnen, gehören zu der benannten Gruppe.

#### Gruppenidentifikator

Ein optionaler `shipping` oder `billing` Gruppenidentifikator

- `shipping`
  - : Das durch darauffolgende Token identifizierte Feld ist Teil der Lieferadresse oder Kontaktinformation.
- `billing`
  - : Das durch darauffolgende Token identifizierte Feld ist Teil der Rechnungsadresse oder Kontaktinformation.

#### Detail-Token

Jede Leerzeichen-getrennte Detailtokenliste enthält entweder einen Empfängertyp mit digitalen Kontaktinformationen in dieser Reihenfolge oder eine Leerzeichen-getrennte Tokenliste anderer Token.

##### Empfängertyp

Die Token, die den Typ des Empfängers kennzeichnen, sind:

- `home`
  - : Der durch darauffolgende Token identifizierte Kontakt ist für den Kontakt mit dem Empfänger zu seinem Wohnsitz.
- `work`
  - : Der durch darauffolgende Token identifizierte Kontakt ist für den Kontakt mit dem Empfänger bei der Arbeit.
- `mobile`
  - : Der durch darauffolgende Token identifizierte Kontakt ist unabhängig vom Standort für den Kontakt mit dem Empfänger.
- `fax`
  - : Der durch darauffolgende Token identifizierte Empfänger ist für ein Faxgerät vorgesehen.
- `pager`
  - : Der durch darauffolgende Token identifizierte Empfänger ist für einen Personenrufempfänger oder Piepser vorgesehen.

##### Digitale Kontakt-Token

Das Token oder die Gruppe von Token für Telefonnummern oder Komponenten von Nummern, Durchwahlnummern, E-Mail-Adressen oder Instant Messaging-Protokolle.

- `tel`
  - : Eine vollständige Telefonnummer, inklusive Ländervorwahl. Wenn Sie die Telefonnummer in ihre Komponenten aufteilen müssen, können Sie diese Werte für jene Felder verwenden:
    - `tel-country-code`
      - : Der Ländercode, wie „1“ für die USA, Kanada, und andere Gebiete in Nordamerika sowie Teile der Karibik.
    - `tel-national`
      - : Die gesamte Telefonnummer ohne den Ländercode, samt einer nationalen Vorwahl. Für die Telefonnummer „1-855-555-6502“ wäre der Wert dieses Feldes „855-555-6502“.
    - `tel-area-code`
      - : Die Ortsvorwahl, mit einer eventuell erforderlichen nationalen Vorwahl.
    - `tel-local`
      - : Die Telefonnummer ohne Landes- oder Ortsvorwahl. Diese kann weiter in zwei Teile aufgeteilt werden, für Telefonnummern, die aus einer Vorwahl und einer nachfolgenden Nummer innerhalb der Vorwahl bestehen. Verwenden Sie für die Telefonnummer „555-6502“ `tel-local-prefix` für „555“ und `tel-local-suffix` für „6502“.

- `tel-extension`
  - : Eine Telefon-Durchwahlnummer innerhalb der Telefonnummer, wie eine Raum- oder Suitennummer in einem Hotel oder eine Bürodurchwahl in einem Unternehmen.
- `email`
  - : Eine E-Mail-Adresse.
- `impp`
  - : Eine URL für einen Endpunkt eines Instant Messaging-Protokolls, wie `xmpp:username@example.net`.

##### Andere Token

Wenn das Formularfeld keine Telefonnummer, E-Mail-Adresse oder ein Instant Messaging-Protokoll ist, wird die Leerzeichen-getrennte Liste von Token nicht von einem Kontakttyp angeführt:

- `name`
  - : Das Feld erwartet als Wert den vollständigen Namen einer Person. Die Verwendung von `name` wird bevorzugt anstelle der Aufteilung des Namens in seine Bestandteile, da dies das vielfältige Spektrum menschlicher Namen und deren Strukturierung vermeidet. Falls Sie jedoch den Namen in seine Bestandteile aufteilen müssen, können Sie die folgenden `autocomplete`-Werte verwenden:
    - `honorific-prefix`
      - : Das Präfix oder der Titel, wie „Mrs.“, „Mr.“, „Miss“, „Ms.“, „Dr.“, oder „Mlle.“.
    - `given-name`
      - : Der Vorname (oder „erste“ Name).
    - `additional-name`
      - : Der zweite Vorname.
    - `family-name`
      - : Der Nachname (oder Familienname).
    - `honorific-suffix`
      - : Das Suffix, wie „Jr.“, „B.Sc.“, „PhD.“, „MBASW“ oder „IV“.
    - `nickname`
      - : Ein Spitzname oder Pseudonym.

- `username`
  - : Ein Benutzername oder Kontoname.
- `new-password`
  - : Ein neues Passwort. Beim Erstellen eines neuen Kontos oder Ändern von Passwörtern sollte dies für ein Feld verwendet werden wie „Geben Sie Ihr neues Passwort ein“ oder „Neues Passwort bestätigen“, anstelle eines allgemeinen „Geben Sie Ihr aktuelles Passwort ein“-Feldes, das möglicherweise vorhanden ist. Der Browser kann dies sowohl verwenden, um das versehentliche Ausfüllen eines bestehenden Passworts zu vermeiden als auch, um Hilfe beim Erstellen eines sicheren Passworts anzubieten.
- `current-password`
  - : Das aktuelle Passwort des Benutzers.
- `one-time-code`
  - : Ein einmaliges Passwort (OTP) zur Verifizierung der Benutzeridentität, das als zusätzlicher Faktor in einem Anmeldeablauf verwendet wird. Dieses wird am häufigsten über einen Out-of-Channel-Mechanismus empfangen, wie z.B. SMS, E-Mail oder Authentifizierungsanwendungen.
- `organization-title`
  - : Ein Jobtitel oder der Titel, den eine Person innerhalb einer Organisation hat, wie „Senior Technical Writer“, „President“ oder „Assistant Troop Leader“.
- `organization`
  - : Ein Firmen- oder Organisationsname, wie „Acme Widget Company“ oder „Girl Scouts of America“.
- `street-address`
  - : Eine Straßenadresse. Diese kann mehrere Textzeilen umfassen und sollte den Standort der Adresse innerhalb der zweiten Verwaltungsebene (typischerweise einer Stadt oder einem Ort) vollständig identifizieren, sollte jedoch nicht den Stadtnamen, die Postleitzahl oder den Namen des Landes umfassen.
    - `address-line1`, `address-line2`, `address-line3`
      - : Jede einzelne Zeile der Straßenadresse. Diese sollten nur vorhanden sein, wenn `street-address` nicht vorhanden ist.
- `address-level4`
  - : Die am feinsten abgestufte [Verwaltungsebene](#verwaltungsebenen_in_adressen) in Adressen, die vier Ebenen aufweisen.
- `address-level3`
  - : Die dritte [Verwaltungsebene](#verwaltungsebenen_in_adressen) in Adressen mit mindestens drei Verwaltungsebenen.
- `address-level2`
  - : Die zweite [Verwaltungsebene](#verwaltungsebenen_in_adressen) in Adressen mit mindestens zwei davon. In Ländern mit zwei Verwaltungsebenen wäre dies typischerweise die Stadt, das Dorf oder eine andere Lokalität, in der sich die Adresse befindet.
- `address-level1`
  - : Die erste [Verwaltungsebene](#verwaltungsebenen_in_adressen) in der Adresse. Dies ist typischerweise die Provinz, in der sich die Adresse befindet. In den Vereinigten Staaten wäre dies der Bundesstaat, in der Schweiz der Kanton, im Vereinigten Königreich das County.
- `country`
  - : Ein Länder- oder Gebietscode.
- `country-name`
  - : Ein Länder- oder Gebietsname.
- `postal-code`
  - : Eine Postleitzahl (in den USA ist dies die ZIP-Codes).

- `cc-name`
  - : Der vollständige Name, so wie er auf oder mit einem Zahlungsmittel wie einer Kreditkarte angegeben ist. Die Verwendung eines vollständigen Namensfelds wird im Allgemeinen bevorzugt, anstatt den Namen in Einzelteile zu zerlegen.
    - `cc-given-name`
      - : Ein Vorname, wie er auf einem Zahlungsmittel wie einer Kreditkarte angegeben ist.
    - `cc-additional-name`
      - : Ein zweiter Vorname, wie er auf einem Zahlungsmittel oder einer Kreditkarte angegeben ist.
    - `cc-family-name`
      - : Ein Nachname, wie er auf einer Kreditkarte angegeben ist.
- `cc-number`
  - : Eine Kreditkartennummer oder eine andere Nummer, die ein Zahlungsmittel identifiziert, wie z.B. eine Kontonummer.
- `cc-exp`
  - : Ein Ablaufdatum des Zahlungsmittels, typischerweise in der Form "MM/YY" oder "MM/YYYY".
    - `cc-exp-month`
      - : Der Monat, in dem das Zahlungsmittel abläuft.
    - `cc-exp-year`
      - : Das Jahr, in dem das Zahlungsmittel abläuft.
- `cc-csc`
  - : Der Sicherheitscode des Zahlungsmittels; auf Kreditkarten handelt es sich um die dreistellige Verifikationsnummer auf der Rückseite der Karte.
- `cc-type`
  - : Der Typ des Zahlungsmittels (wie "Visa" oder "Master Card").
- `transaction-currency`
  - : Die Währung, in der die Transaktion durchgeführt werden soll.
- `transaction-amount`
  - : Der Betrag, angegeben in der durch `transaction-currency` spezifizierten Währung, der Transaktion für ein Zahlungsformular.
- `language`
  - : Eine bevorzugte Sprache, angegeben als gültiges {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}}.
- `bday`
  - : Ein Geburtsdatum, als vollständiges Datum.
    - `bday-day`
      - : Der Tag des Monats eines Geburtstags.
    - `bday-month`
      - : Der Monat des Jahres eines Geburtstags.
    - `bday-year`
      - : Das Jahr eines Geburtstags.
- `sex`
  - : Eine Geschlechtsidentität (wie "Female", "Fa'afafine", "Hijra", "Male", "Nonbinary"), als Freitext ohne neue Zeilen.
- `url`
  - : Eine URL, wie eine Homepage oder die Adresse einer Firmenwebsite, wie es im Kontext der anderen Felder im Formular angemessen ist.
- `photo`
  - : Die URL eines Bildes, das die Person, das Unternehmen oder die Kontaktinformation darstellt, die in den anderen Feldern des Formulars angegeben sind.

#### Web-Autorisierungs-Token

Mit {{htmlelement("input")}} und {{htmlelement("textarea")}}, kann das `webauthn`-Token zuletzt hinzugefügt werden, um anzuzeigen, dass der Nutzer-Agent öffentliche Schlüssel-Zugangsdaten anzeigen soll, wenn der Benutzer mit dem Steuerelement interagiert.

- `webauthn`
  - : Zugangsdaten, die von der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) generiert werden, wie von einem bedingten [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) Aufruf angefordert (d.h. ein Aufruf, der `mediation: 'conditional'` einschließt). Sollte dies enthalten sein, ist es das letzte Token in der Leerzeichen-getrennten Tokenliste. Siehe [Anmelden mit einem Schlüssel über Formular-Autovervollständigung](https://web.dev/articles/passkey-form-autofill) für weitere Details.

## Barrierefreiheit

Mit passenden `autocomplete`-Werten können Benutzer mit kognitiven Einschränkungen, Motorikbehinderungen und anderen Einschränkungen Formulare schneller und genauer ausfüllen, indem die Notwendigkeit zum Tippen und Merken von Informationen reduziert wird. Wenn der Browser den Zweck eines Formularelements durch seinen `autocomplete`-Wert ermitteln kann, kann er gespeicherte Daten wie Namen, Adressen und Zahlungsdaten anbieten, was allen Benutzern zugutekommt, aber besonders wichtig für diejenigen ist, die Schwierigkeiten beim manuellen Dateneintrag haben.

Gültige Autovervollständigungstoken bereitzustellen erfüllt auch das [WCAG 2.2 Erfolgs-Kriterium 1.3.5: Identifikation des Eingabezwecks](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose) (Level AA), welches verlangt, dass der Zweck von Eingabefeldern, die Benutzerdaten sammeln, programmatisch bestimmt werden kann. Dies ermöglicht es Nutzer-Agenten und Assistive Technologien, personalisierte Präsentationstechniken anzuwenden, wie das Anzeigen vertrauter Symbole neben Feldern, um Benutzern beim Verständnis und Ausfüllen von Formularen zu helfen.

### Vermeiden Sie das Deaktivieren der Autovervollständigung

Das Setzen von `autocomplete="off"` verhindert, dass der Browser gespeicherte Daten für ein Feld anbietet. Während Entwickler dies manchmal nutzen, um Autovervollständigung aus Sicherheitsgründen (wie einmalige Codes) zu verhindern, beseitigt es ein Feature, auf das viele Benutzer angewiesen sind. Benutzer mit kognitiven Beeinträchtigungen können auf Autovervollständigung angewiesen sein, um sich persönliche Informationen zu merken, und Benutzer mit motorischen Beeinträchtigungen profitieren von der reduzierten Eingabe. Browser könnten `autocomplete="off"` auf Anmeldefeldern auch ignorieren, um Passwortmanager zu unterstützen.

### Vermeiden Sie ungültige Autocomplete-Werte

Das Verwenden ungültiger oder nicht standardisierter Werte (wie erfundener Strings zur Umgehung von Autofill) hat eine ähnliche Auswirkung: Der Browser kann das Feld keinem bekannten Zweck zuordnen, so dass er keine relevanten Vorschläge machen kann. Dies scheitert auch an der obengenannten WCAG-Anforderung, da der Eingabezweck nicht mehr programmatisch bestimmbar ist. Wenn Sie Autocomplete für ein spezifisches Feld deaktivieren müssen, ziehen Sie in Betracht, `autocomplete="off"` nur dort zu verwenden, wo dies wirklich erforderlich ist (zum Beispiel für CAPTCHA oder Einmaltokenfelder), anstatt es großzügig über ein ganzes Formular hinweg anzuwenden.

## Beispiele

```html
<div>
  <label for="cc-number">Enter your credit card number</label>
  <input name="cc-number" id="cc-number" autocomplete="off" />
</div>
```

### Verwaltungsebenen in Adressen

Die vier Verwaltungsfeld-Ebenen (`address-level1` bis `address-level4`) beschreiben die Adresse in Bezug auf zunehmende Präzision innerhalb des Landes, in dem sich die Adresse befindet. Jedes Land hat sein eigenes System von Verwaltungsebenen und kann die Ebenen in unterschiedlicher Reihenfolge angeben, wenn Adressen geschrieben werden.

`address-level1` repräsentiert immer die größte Verwaltungseinheit; es ist der am wenigsten spezifische Teil der Adresse, abgesehen vom Landesnamen.

### Flexibilität des Formularlayouts

Da unterschiedliche Länder ihre Adressen auf unterschiedliche Weise schreiben, mit jedem Feld an unterschiedlichen Stellen innerhalb der Adresse und sogar variablen Sätzen und Anzahlen von Feldern insgesamt, kann es hilfreich sein, wenn Ihre Seite, wann immer möglich, in der Lage ist, zu dem Layout zu wechseln, das von Ihren Benutzern erwartet wird, wenn ein Adresseneingabeformular präsentiert wird, basierend auf dem Land, in dem sich die Adresse befindet.

### Variationen

Die Verwendung jeder Verwaltungsebene wird von Land zu Land variieren. Nachfolgend sind einige Beispiele aufgeführt; dies ist nicht als vollständige Liste gedacht.

#### Vereinigte Staaten

Eine typische Wohnadresse innerhalb der Vereinigten Staaten sieht so aus:

432 Anywhere St
Exampleville CA 95555

In den Vereinigten Staaten ist der am wenigsten spezifische Teil der Adresse der Bundesstaat, in diesem Fall "CA" (die offizielle Abkürzung des US Postal Service für "California"). Somit ist `address-level1` der Bundesstaat oder in diesem Fall „CA“.

Der zweitwenig spezifische Teil der Adresse ist der Stadt- oder Ortsname, daher ist `address-level2` in diesem Beispiel „Exampleville“.

Adressen in den Vereinigten Staaten verwenden keine Ebenen 3 und höher.

#### Vereinigtes Königreich

Adresseneingabeformulare im Vereinigten Königreich sollten je nach Adresse ein oder zwei Adressstufen und eine, zwei oder drei Adresszeilen enthalten. Eine vollständige Adresse würde wie folgt aussehen:

103 Frogmarch Street
Upper-Wapping
Winchelsea
Whereshire
TN99 8ZZ

Die Adressstufen sind:

- `address-level1`: Das County — in diesem Fall "Whereshire".
- `address-level2`: Die Poststadt — in diesem Fall "Winchelsea".
- `address-line2`: Die Lokalität — in diesem Fall "Upper-Wapping".
- `address-line1`: Die Haus-/Straßendetails — in diesem Fall "103 Frogmarch Street".

Der Postcode ist separat. Beachten Sie, dass Sie im Vereinigten Königreich tatsächlich nur den Postcode und `address-line1` verwenden können, um Post erfolgreich zuzustellen, sodass sie die einzigen Pflichtangaben sein sollten, jedoch geben Menschen in der Regel mehr Details an.

#### China

China kann bis zu drei Verwaltungsebenen verwenden: die Provinz, die Stadt und den Bezirk.

Der 6-stellige Postleitzahlencode ist nicht immer erforderlich, aber wenn angegeben, wird er separat mit einer Bezeichnung für Klarheit platziert. Zum Beispiel:

北京市东城区建国门北大街 8 号华润大厦 17 层 1708 单元
邮编：100005

#### Japan

Eine Adresse in Japan wird typischerweise **in einer Zeile** geschrieben, in einer Reihenfolge von den allgemeinsten zu den spezifischsten Teilen (im **umgekehrten Verhältnis zu den Vereinigten Staaten**). In einer Adresse gibt es zwei oder drei Verwaltungsebenen. Eine zusätzliche Zeile kann verwendet werden, um Gebäudenamen und Raumnummern anzuzeigen. Die Postleitzahl ist separat. Zum Beispiel:

〒 381-0000
長野県長野市某町 123

"〒" und die folgenden sieben Ziffern zeigen die Postleitzahl an.

`address-level1` wird für Präfekturen oder die Metropole Tokio verwendet; in diesem Fall „長野県“ (Präfektur Nagano). `address-level2` wird üblicherweise für Städte, Landkreise, Gemeinden und Dörfer verwendet; in diesem Fall „長野市“ (Stadt Nagano). „某町 123“ ist `address-line1`, das aus einem Gebietsnamen und einer Flurstücksnummer besteht.

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
