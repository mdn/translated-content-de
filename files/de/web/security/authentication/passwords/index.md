---
title: Passwörter
slug: Web/Security/Authentication/Passwords
l10n:
  sourceCommit: dd70ed064388b0fac4338321f727c8840a508b64
---

Die ursprüngliche und nach wie vor häufigste Authentifizierungsmethode im Web ist das Passwort.

In diesem Leitfaden:

- geben wir einen kurzen [Überblick](#überblick) über die passwortbasierte Authentifizierung,
- erläutern wir [die wichtigsten Angriffe und die entsprechenden Schutzmaßnahmen](#angriffe_und_schutzmaßnahmen),
- beschreiben wir die drei wichtigsten Abläufe ausführlicher: [Registrierung](#registrierung), [Anmeldung](#anmeldung) und [Zurücksetzen des Passworts](#zurücksetzen_des_passworts). Dabei zeigen wir, wie sich die Schutzmaßnahmen integrieren lassen.

Abschließend erläutern wir, warum [passwortbasierte Authentifizierung als vergleichsweise schwache Form der Authentifizierung gelten sollte](#schwächen_der_passwortbasierten_authentifizierung), selbst wenn bewährte Verfahren befolgt werden. Wenn möglich, sollte sie durch andere Methoden ergänzt oder vollständig ersetzt werden.

## Überblick

Für die passwortbasierte Authentifizierung implementiert eine Website zwei wesentliche Abläufe: die _Registrierung_ und die _Anmeldung_.

Bei der Registrierung:

1. Die Person gibt einen neuen Benutzernamen und ein Passwort an, beispielsweise in einem {{htmlelement("form")}}-Element auf der Website.
2. Die Webseite sendet den Benutzernamen und das Passwort an einen Server, beispielsweise indem sie die Formulardaten mit einer {{httpmethod("POST")}}-Anfrage übermittelt.
3. Der Server erstellt in seiner Datenbank einen neuen Datensatz für diese Person. Der Benutzername dient als Schlüssel; das Passwort wird unter diesem Schlüssel gespeichert.

![Registrierung mit einem Passwort.](password-basic-register.svg)

Bei der Anmeldung:

1. Die Person gibt ihren Benutzernamen und ihr Passwort ein.
2. Die Webseite sendet den Benutzernamen und das Passwort an den Server.
3. Der Server ruft das gespeicherte Passwort für diese Person ab und vergleicht es mit dem gerade empfangenen Passwort.
4. Stimmen die Passwörter überein, wird die Person angemeldet.

![Anmeldung mit einem Passwort.](password-basic-signin.svg)

## Angriffe und Schutzmaßnahmen

Aus diesem Überblick ergeben sich mehrere Möglichkeiten, wie Angreifende sich als berechtigte Person ausgeben können.

- **Erraten von Passwörtern**
  - : Angreifende können viele verschiedene Passwörter für eine Person ausprobieren. Dafür verwenden sie üblicherweise Passwortlisten, die viele der gängigsten Passwörter enthalten.

- **Credential Stuffing**
  - : Angreifende können eine Sammlung von Benutzernamen-Passwort-Paaren aus einem früheren Datenleck auf einer anderen Website erwerben und sie anschließend auf der Zielwebsite ausprobieren. Dabei hoffen sie, dass jemand auf beiden Websites dasselbe Passwort verwendet hat.

- **Abfangen**
  - : Angreifende können den Benutzernamen und das Passwort während der Übertragung vom Browser zum Server abfangen. Eine praktische Möglichkeit besteht darin, kostenlose WLAN-Hotspots in Cafés oder Flughäfen einzurichten und zu warten, bis sich Personen damit verbinden und anschließend auf der Zielwebsite anmelden.

- **Kompromittierung der Datenbank**
  - : Angreifende können in den Server eindringen und die Datenbank mit den gespeicherten Datensätzen abrufen.

- **Phishing**
  - : Angreifende können eine Person dazu verleiten, ihnen ihr Passwort preiszugeben. Beispielsweise können sie eine Seite erstellen, die genauso aussieht wie die Anmeldeseite der Zielwebsite. Anschließend senden sie der Person eine E-Mail mit einem Link zur gefälschten Seite und fordern sie auf, sich anzumelden, um den Status einer Bestellung zu prüfen oder eine Nachricht zu erhalten.

### Schutzmaßnahmen

- **Passwortmanager unterstützen**
  - : Ein Passwortmanager ist eine Anwendung, mit der Personen Passwörter speichern können, damit sie sich diese nicht merken müssen. Passwortmanager können Passwörter auch automatisch in Anmeldeformulare eintragen und starke Passwörter erzeugen. Sie werden häufig als Browser-Erweiterungen bereitgestellt; Browser verfügen außerdem über eigene integrierte Passwortmanager.

    Passwortmanager verringern das Risiko durch Angriffe mittels [Erraten von Passwörtern](#guessing) und [Credential Stuffing](#credential_stuffing). Sie erleichtern es, starke Passwörter zu verwenden, und reduzieren die Wiederverwendung von Passwörtern. Sie helfen auch gegen [Phishing](/de/docs/Web/Security/Attacks/Phishing#password_managers): Auf den bei Phishing-Angriffen verwendeten täuschend ähnlichen Webseiten tragen sie Anmeldedaten nicht automatisch ein. Das kann der betroffenen Person helfen zu erkennen, dass die Website nicht echt ist.

    In den Empfehlungen für die Abläufe zur [Registrierung](#registrierung) und [Anmeldung](#anmeldung) beschreiben wir, wie Sie sicherstellen können, dass Passwortmanager mit Ihrer Website funktionieren.

- **Starke Passwörter wählen**
  - : Zum Schutz vor Angriffen mittels [Erraten von Passwörtern](#guessing) und [Credential Stuffing](#credential_stuffing) können Sie prüfen, ob ein neues Passwort schwach ist oder auf Listen bekanntermaßen kompromittierter Passwörter steht. Diese Prüfung kann bei der [Registrierung](#registrierung) oder beim [Zurücksetzen des Passworts](#zurücksetzen_des_passworts) erfolgen.

- **Passwörter sicher übertragen**
  - : Zum Schutz vor dem [Abfangen](#interception) müssen Passwörter immer über {{Glossary("HTTPS", "HTTPS")}} übertragen werden. Dies sollte jedoch keine Sonderregel nur für Passwörter sein: Alle Seiten Ihrer Website sollten stets über HTTPS übertragen werden, um [Manipulator-in-the-Middle-Angriffe (MITM)](/de/docs/Web/Security/Attacks/MITM) zu erschweren.

- **Passwörter sicher speichern**
  - : Zum Schutz vor einer [Kompromittierung der Datenbank](#database_compromise) muss der Server Passwörter so speichern, dass Angreifende das ursprüngliche Passwort praktisch nicht wiederherstellen können – selbst wenn sie Zugriff auf die Datenbank des Servers erhalten. Die Anforderungen dafür erläutern wir in den Empfehlungen zur [Registrierung](#registrierung).

In den nächsten drei Abschnitten betrachten wir die wichtigsten Abläufe eines Systems zur passwortbasierten Authentifizierung genauer:

- [Registrierung](#registrierung)
- [Anmeldung](#anmeldung)
- [Zurücksetzen des Passworts](#zurücksetzen_des_passworts)

In jedem Abschnitt stellen wir Verfahren vor, die das Risiko durch die genannten Angriffe verringern. Wie wir sehen werden, lässt es sich jedoch nicht vollständig beseitigen.

## Registrierung

Bei der Registrierung gibt eine neue Person einen Benutzernamen und ein Passwort an. Sehr wahrscheinlich fragt die Website auch nach einer E-Mail-Adresse und verwendet diese möglicherweise als Benutzernamen.

Die Website sollte diese Angaben mit einem HTML-{{htmlelement("form")}} abfragen.

### Formulargestaltung

Gut gestaltete Formulare erleichtern den Umgang mit Passwörtern und helfen Passwortmanagern bei der Integration in eine Website.

In einem Registrierungsformular erkennt ein Passwortmanager üblicherweise:

- dass eine Person ein neues Passwort erstellen soll, und bietet an, eines zu erzeugen. Das hilft beim Schutz vor Angriffen mittels [Erraten von Passwörtern](#guessing) und [Credential Stuffing](#credential_stuffing).
- dass eine Person das Registrierungsformular absendet, und bietet an, den Benutzernamen und das Passwort für die Website zu speichern.

Die folgenden Verfahren helfen Passwortmanagern dabei, die relevanten Formulare, ihre Elemente und die Zeitpunkte zu erkennen, zu denen sie aktiv werden sollen.

- Das `<form>`-Element sollte ausschließlich der Registrierung dienen.
- Formulare sollten eindeutig erkennen lassen, dass sie abgesendet wurden. Dazu sollte nach dem Absenden entweder eine andere Seite aufgerufen oder eine Navigation mit `History.pushState()` oder `History.replaceState()` simuliert werden.
- Einzelne `<input>`-Elemente sollten den passenden `type` verwenden:
  - `"text"` oder `"email"` für Benutzernamen
  - `"password"` für Passwörter.
- Einzelne `<input>`-Elemente sollten das passende `autocomplete`-Attribut verwenden:
  - `"username"` für den Benutzernamen
  - `"new-password"` zum Erstellen eines neuen Passworts in Formularen zur Registrierung oder zum Zurücksetzen des Passworts
  - `"current-password"` zur Eingabe eines vorhandenen Passworts in Formularen zur Anmeldung oder zum Zurücksetzen des Passworts
- Formulare sollten versteckte Felder für Informationen verwenden, die die Person nicht eingeben muss, die Passwortmanagern aber als Hinweis dienen können. Beispielsweise muss der Benutzername in einem Formular zum Ändern des Passworts möglicherweise nicht eingegeben werden. Er kann einem Passwortmanager jedoch dabei helfen, das richtige Passwort auszuwählen.

Weitere Informationen finden Sie unter:

- [Bewährte Verfahren für Anmeldeformulare](https://web.dev/articles/sign-in-form-best-practices#new-password)
- [Passwortmanager mit Ihrem Anmeldeformular kompatibel machen](https://hidde.blog/making-password-managers-play-ball-with-your-login-form/)
- [Hervorragende Passwortformulare erstellen](https://www.chromium.org/developers/design-documents/create-amazing-password-forms/)

Im Registrierungsformular wird die Person üblicherweise aufgefordert, das Passwort zweimal einzugeben.

### Absenden des Formulars

Wenn die Person das Formular absendet, sendet das Frontend der Website den Benutzernamen, beide Eingaben des Passworts und die E-Mail-Adresse mit einer HTTP-{{httpmethod("POST")}}-Anfrage an den Server. Dies muss über {{Glossary("HTTPS", "HTTPS")}} erfolgen, damit Angreifende das Passwort während der Übertragung nicht [abfangen](#interception) können.

### Validierung von Benutzername und Passwort

Wenn der Server die `POST`-Anfrage empfängt, validiert er den Benutzernamen und das Passwort. Der Benutzername darf noch nicht vergeben sein, und die beiden Passworteingaben müssen übereinstimmen.

Das Risiko von Angriffen durch [Erraten von Passwörtern](#guessing) lässt sich verringern, wenn Personen stärkere Passwörter wählen. Die Vorgaben einer Website können sie dabei unterstützen.

Wenn Personen neue Passwörter wählen, sollten Websites:

- eine großzügige maximale Passwortlänge zulassen (mindestens 64 Zeichen),
- alle Unicode-Zeichen erlauben,
- keine bestimmten Zeichentypen vorschreiben (beispielsweise keine Mischung aus Groß- und Kleinbuchstaben oder Satzzeichen verlangen). Solche Regeln können viele starke Passwörter ausschließen, etwa Passphrasen. Außerdem befolgen Personen solche Regeln meist auf sehr vorhersehbare Weise.

Zusätzlich können Websites:

- das Risiko von Angriffen durch [Erraten von Passwörtern](#guessing) verringern, indem sie Passwörter ablehnen, die auf Listen häufig verwendeter Passwörter stehen.
- das Risiko von [Credential Stuffing](#credential_stuffing) verringern, indem sie Passwörter ablehnen, die bei Datenlecks offengelegt wurden. Die Website [Have I Been Pwned](https://haveibeenpwned.com) stellt beispielsweise Listen solcher Passwörter bereit und macht sie über eine [API](https://haveibeenpwned.com/API/v3#PwnedPasswords) zugänglich.

Beachten Sie jedoch, dass dies bei Weitem keinen vollständigen Schutz gegen diese Angriffe bietet: Datenlecks werden möglicherweise nicht öffentlich bekannt oder treten erst auf, nachdem das Passwort gewählt wurde.

Websites sollten außerdem den Einsatz eines Werkzeugs zur Bewertung der Passwortstärke wie [zxcvbn](https://github.com/zxcvbn-ts/zxcvbn) erwägen. Dieses Werkzeug prüft Passwörter auch anhand der Daten von Have I Been Pwned.

Weitere Informationen finden Sie unter:

- [OWASP-Cheat-Sheet zur Authentifizierung](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html#implement-proper-password-strength-controls)
- [NIST-Leitlinien für digitale Identitäten: Authentifizierung und Lebenszyklusverwaltung](https://pages.nist.gov/800-63-3/sp800-63b.html)
- [Weiterentwickelte Passwörter: Empfehlungen zur Authentifizierung für die heutige Zeit](https://www.troyhunt.com/passwords-evolved-authentication-guidance-for-the-modern-era/)

Auch der Client kann Daten validieren, bevor er sie an den Server sendet. Dies dient jedoch lediglich der Benutzerfreundlichkeit: Der Server muss die Daten ebenfalls validieren.

### Passwörter speichern

Wenn Fehler auftreten, antwortet der Server mit einer Fehlermeldung. Andernfalls speichert er das Passwort in seiner Datenbank in einem Datensatz, dessen Schlüssel der Benutzername ist.

#### Passwörter hashen

Websites dürfen Passwörter nicht als {{Glossary("plaintext", "Klartext")}} speichern. Stattdessen wird das Passwort gehasht, wenn sich eine Person mit einem neuen Passwort registriert oder ihr Passwort ändert. Gespeichert wird der Hash. Wenn die Person bei der Anmeldung ihr Passwort eingibt, führt die Website folgende Schritte aus:

- Sie ruft den Hash aus der Datenbank ab.
- Sie hasht das von der Person eingegebene Passwort.
- Sie vergleicht die Hashes.

Eine Hashfunktion ist eine _Einwegfunktion_. Das bedeutet, dass sich aus ihrer Ausgabe die ursprüngliche Eingabe nicht ableiten lässt.

Wenn Angreifende Zugriff auf die Datenbank erhalten, versuchen sie deshalb üblicherweise, Passwörter zu ermitteln, indem sie Listen häufig verwendeter Passwörter hashen und die Ergebnisse mit den Datenbankeinträgen vergleichen. Aus diesem Grund sind Hashfunktionen für die Passwortspeicherung absichtlich langsam und schwer zu optimieren.

Bei Hashfunktionen, die speziell für Passwörter entwickelt wurden, lässt sich üblicherweise der Aufwand für die Berechnung des Hashs einstellen. So können sie abhängig von den erwarteten Möglichkeiten der Angreifenden langsamer oder schneller gemacht werden.

#### Vorberechnete Hash-Tabellen

Statt Hashes selbst zu berechnen, können Angreifende das zu einem Hash gehörende Passwort in einer vorberechneten Tabelle nachschlagen. Eine solche Tabelle wird auch als [Rainbow Table](https://en.wikipedia.org/wiki/Rainbow_table) bezeichnet und ordnet möglichen Passwörtern ihre Hashes zu:

| Passwort | Hash        |
| -------- | ----------- |
| pa55w0rd | 56965E2A... |
| abcdef   | BEF57EC7... |
| letmein  | 1C8BFE8F... |

Obwohl diese Tabellen sehr groß sein können, sind solche Angriffe mitunter wirksam, weil das Nachschlagen in einer Tabelle schnell ist.

#### Salt und Pepper

Um Angriffe mit vorberechneten Hash-Tabellen zu verhindern, muss dem Passwort vor dem Hashen ein _Salt_ hinzugefügt werden. Ein Salt ist ein Zufallswert, der für jedes Passwort einzigartig ist. Er muss nicht geheim sein und wird zusammen mit dem Passwort-Hash gespeichert. Er verhindert jedoch, dass Angreifende vorberechnete Hashwerte verwenden können: Durch den Salt ergibt dasselbe Passwort einen anderen Hashwert.

Als zusätzliche Schutzmaßnahme können Websites der Eingabe der Hashfunktion auch einen _Pepper_ hinzufügen. Im Gegensatz zum Salt ist der Pepper:

- **Nicht einzigartig:** Für alle Passwörter in der Datenbank wird derselbe Wert verwendet.
- **Geheim:** Er darf nicht in der Datenbank selbst gespeichert werden, sondern muss an einem anderen Ort liegen, beispielsweise in einem Hardware-Sicherheitsmodul (HSM).

#### Hash-Algorithmen

Websites sollten zum Hashen von Passwörtern standardisierte Algorithmen verwenden. Diese unterstützen alle oben beschriebenen Funktionen. Der [OWASP-Leitfaden zur Passwortspeicherung](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html#password-hashing-algorithms) empfiehlt in der folgenden Reihenfolge:

1. [Argon2id](https://en.wikipedia.org/wiki/Argon2)
2. [scrypt](https://en.wikipedia.org/wiki/Scrypt)
3. [bcrypt](https://en.wikipedia.org/wiki/Bcrypt)
4. [PBKDF2](https://en.wikipedia.org/wiki/PBKDF2)

#### Web-Frameworks verwenden

Funktionen zum Speichern und Überprüfen von Passwörtern sicher zu implementieren, ist schwierig. Verwenden Sie deshalb die Funktionen eines bewährten Frameworks, statt eigene zu implementieren. [Django](https://docs.djangoproject.com/en/stable/topics/auth/passwords/) verwendet beispielsweise standardmäßig PBKDF2, ermöglicht aber auch die Verwendung eines anderen Algorithmus.

### E-Mail-Adresse verifizieren

Wenn die Website E-Mails für das Zurücksetzen von Passwörtern verwenden möchte, muss der Server auch prüfen, ob die E-Mail-Adresse der Person gehört, die sich registriert. Dazu erzeugt der Server üblicherweise ein zufälliges Token und fügt es als Parameter in eine Verifizierungs-URL ein:

```plain
https://example.org/verify?<random-token>
```

Anschließend sendet der Server eine E-Mail an die angegebene Adresse. Darin wird die Person aufgefordert, auf einen Link zur Verifizierungs-URL zu klicken. Die aufgerufene Seite kann das Token aus der URL auslesen und damit den Datensatz der Person in der Datenbank finden. Danach kann sie die E-Mail-Adresse als verifiziert markieren.

## Anmeldung

Zur Anmeldung gibt die Person ihren Benutzernamen und ihr Passwort in einem HTML-`<form>` ein, das ausschließlich der Anmeldung dient.

Wie das Registrierungsformular sollte auch das Anmeldeformular für die Zusammenarbeit mit Passwortmanagern gestaltet und entsprechend getestet werden. Dazu sollte es die zuvor unter [Formulargestaltung](#formulargestaltung) beschriebenen Verfahren befolgen.

Wenn die Person das Formular absendet, übermittelt das Frontend der Website den Benutzernamen und das Passwort mit einer HTTP-`POST`-Anfrage an den Server. Auch dies muss über TLS erfolgen, damit Angreifende das Passwort während der Übertragung nicht abfangen können.

Wenn der Server die `POST`-Anfrage empfängt, führt er folgende Schritte aus:

- Er ruft den Datensatz für den angegebenen Benutzernamen ab.
- Falls ein Datensatz vorhanden ist, vergleicht er das angegebene Passwort mit dem Wert im Datensatz.

Ist der Vergleich erfolgreich, meldet der Server die Person an und gibt eine Erfolgsmeldung zurück.

Wenn kein Datensatz gefunden wird oder der Vergleich fehlschlägt, muss der Server in beiden Fällen dieselbe Fehlermeldung zurückgeben. Andernfalls können Angreifende feststellen, ob ein Konto existiert, und diese Information für weitere Angriffe nutzen.

## Zurücksetzen des Passworts

Beim Zurücksetzen des Passworts kann eine Person ein neues Passwort festlegen, wenn sie das bisherige vergessen oder verloren hat. Voraussetzung ist üblicherweise, dass sie bei der Registrierung eine E-Mail-Adresse angegeben und anschließend verifiziert hat.

Wenn die Person das Zurücksetzen ihres Passworts anfordert, bittet die Website sie um ihre E-Mail-Adresse. Die Website kann sie an dieser Stelle auch auffordern, ein CAPTCHA zu lösen. So wird es böswilligen Dritten erschwert, eine berechtigte Person mit zahlreichen Anfragen zum Zurücksetzen des Passworts zu überhäufen.

Anschließend prüft das Backend der Website, ob ein Datensatz für diese E-Mail-Adresse vorhanden ist. _Unabhängig davon, ob ein Datensatz existiert_, zeigt die Website dieselbe Nachricht an: Sie habe eine E-Mail mit weiteren Anweisungen an die angegebene Adresse gesendet. Dieselbe Nachricht in beiden Fällen verhindert, dass Angreifende herausfinden, ob eine bestimmte E-Mail-Adresse mit einem Konto verknüpft ist. Diese Information könnte für weitere Angriffe genutzt werden, beispielsweise für gezieltes [Phishing](/de/docs/Web/Security/Attacks/Phishing), auch _Spearphishing_ genannt.

- Wenn die Website keinen Datensatz hat, sendet sie eine E-Mail an die Adresse. Darin teilt sie der empfangenden Person mit, dass jemand diese Adresse in ein Formular zum Zurücksetzen des Passworts eingegeben hat, für die Adresse jedoch kein Datensatz vorhanden ist. Dies hilft Personen, die ein Konto und mehrere E-Mail-Adressen haben, aber im Formular die falsche Adresse eingegeben haben.

- Wenn die Website einen Datensatz für die E-Mail-Adresse hat, führt sie folgende Schritte aus:
  - Sie erzeugt ein Reset-Token in Form einer Zufallszahl und speichert es beim Datensatz. Das Token erhält einen Ablaufzeitpunkt.
  - Sie fügt den Token-Wert als URL-Parameter in die URL zum Zurücksetzen ein, beispielsweise: `https://example.org/reset?<reset-token>`.
  - Sie sendet eine E-Mail mit dem Link an die angegebene Adresse und fordert die Person auf, darauf zu klicken.

Wenn die Person auf den Link klickt, liest die Seite zum Zurücksetzen den URL-Parameter aus und sucht nach einem passenden gespeicherten Reset-Token. Wird ein Token gefunden, das noch nicht abgelaufen ist, kann die Person ein neues Passwort eingeben. Für diesen Ablauf gelten ähnliche Regeln wie für das Formular zur [Registrierung](#registrierung), damit ein Passwortmanager das neue Passwort erkennen kann.

Abschließend bestätigt die Website der Person per E-Mail, dass ihr Passwort geändert wurde.

Weitere Informationen finden Sie unter:

- [Alles, was Sie schon immer über die Implementierung einer sicheren Funktion zum Zurücksetzen von Passwörtern wissen wollten](https://www.troyhunt.com/everything-you-ever-wanted-to-know/)
- [OWASP-Cheat-Sheet für vergessene Passwörter](https://cheatsheetseries.owasp.org/cheatsheets/Forgot_Password_Cheat_Sheet.html)

## Schwächen der passwortbasierten Authentifizierung

Die oben beschriebenen Verfahren verringern die Risiken eines Systems zur passwortbasierten Authentifizierung. Passwörter bleiben jedoch eine grundsätzlich anfällige Authentifizierungsmethode:

- Passwortmanager und gute Passwortvorgaben können Menschen zwar helfen, starke Passwörter zu wählen und Passwörter nicht wiederzuverwenden. Beides lässt sich jedoch nicht garantieren. Dadurch bleiben sie anfällig für Angriffe mittels [Credential Stuffing](#credential_stuffing) und [Erraten von Passwörtern](#guessing).

- Selbst Personen, die starke Passwörter verwenden und diese nicht wiederverwenden, bleiben anfällig für [Phishing-Angriffe](#phishing).

Um diese Schwächen zu beheben, sollten Sie alternative Methoden in Betracht ziehen – entweder anstelle von Passwörtern oder als {{Glossary("multi-factor_authentication", "zusätzliche Authentifizierungsfaktoren")}}. Manche Websites verwenden beispielsweise Passwörter zusammen mit einem [Einmalpasswort](/de/docs/Web/Security/Authentication/OTP) als zweitem Faktor. Andere unterstützen [Passkeys](/de/docs/Web/Security/Authentication/Passkeys), die gegen Phishing-Angriffe resistent sind.
