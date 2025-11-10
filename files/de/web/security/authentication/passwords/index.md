---
title: Passwörter
slug: Web/Security/Authentication/Passwords
l10n:
  sourceCommit: 3b3c67edd56812fc45386d7b86f2cb8504650966
---

Die ursprüngliche Authentifizierungsmethode im Web und immer noch die häufigste ist das Passwort.

In diesem Leitfaden werden wir:

- Einen kurzen [Überblick](#überblick) über die passwortbasierte Authentifizierung geben
- [Die wichtigsten Angriffe und entsprechende Abwehrmaßnahmen](#angriffe_und_abwehrmaßnahmen) hervorheben
- Eine detailliertere Darstellung der drei Hauptabläufe geben: [Registrierung](#registrierung), [Anmeldung](#anmeldung) und [Passwortzurücksetzung](#passwort-zurücksetzung), um zu zeigen, wie die Abwehrmechanismen integriert werden können.

Abschließend werden wir erörtern, dass auch mit den besten Praktiken [passwortbasierte Authentifizierung als relativ schwache Form der Authentifizierung angesehen werden sollte](#schwächen_passwortbasierter_authentifizierung) und wenn möglich mit anderen Methoden ergänzt oder vollständig ersetzt werden sollte.

## Überblick

Um passwortbasierte Authentifizierung bereitzustellen, implementiert eine Website zwei Hauptabläufe: _Registrierung_ und _Anmeldung_.

Wenn sich der Benutzer registriert:

1. Der Benutzer gibt einen neuen Benutzernamen und ein Passwort an, zum Beispiel indem er es in ein {{htmlelement("form")}}-Element auf der Website eingibt.
2. Die Webseite sendet den Benutzernamen und das Passwort an einen Server, zum Beispiel indem die Formulardaten in einer {{httpmethod("POST")}}-Anfrage übermittelt werden.
3. Der Server erstellt einen neuen Datensatz für diesen Benutzer in seiner Datenbank. Der Schlüssel ist der Benutzername und das Passwort wird darunter gespeichert.

![Registrierung mit einem Passwort.](password-basic-register.svg)

Wenn sich der Benutzer anmeldet:

1. Der Benutzer gibt den Benutzernamen und das Passwort ein.
2. Die Webseite sendet den Benutzernamen und das Passwort an den Server.
3. Der Server ruft das gespeicherte Passwort für den Benutzer ab und vergleicht das gespeicherte Passwort mit dem gerade empfangenen.
4. Wenn die Passwörter übereinstimmen, wird der Benutzer angemeldet.

![Anmelden mit einem Passwort.](password-basic-signin.svg)

## Angriffe und Abwehrmaßnahmen

Beim Betrachten dieses Überblicks können wir einige Möglichkeiten sehen, wie ein Angreifer den Benutzer nachahmen kann.

- **Erraten**
  - : Ein Angreifer könnte viele verschiedene mögliche Passwörter für einen Benutzer ausprobieren. Angreifer verwenden typischerweise Passworlisten, die viele der häufigsten Passwörter enthalten.

- **Credential Stuffing**
  - : Ein Angreifer könnte eine Sammlung von Benutzernamen/Passwort-Paaren aus einem früheren Datenleck auf einer anderen Seite kaufen und sie dann auf der Zielseite ausprobieren, in der Hoffnung, dass ein Benutzer dasselbe Passwort für beide Seiten verwendet hat.

- **Abfangen**
  - : Ein Angreifer könnte den Benutzernamen und das Passwort während der Übertragung vom Browser zum Server abfangen. Eine praktische Möglichkeit, dies zu tun, besteht darin, kostenlose WLAN-Hotspots in Cafés oder Flughäfen einzurichten und darauf zu warten, dass Opfer sich verbinden und dann auf der Zielwebsite anmelden.

- **Datenbankkompromittierung**
  - : Ein Angreifer könnte in den Server einbrechen und die Datenbank der gespeicherten Datensätze abrufen.

- **Phishing**
  - : Ein Angreifer könnte den Benutzer dazu bringen, dem Angreifer sein Passwort auszuhändigen. Zum Beispiel könnte ein Angreifer eine Seite erstellen, die genauso aussieht wie die Anmeldeseite der Zielseite, und dem Zielbenutzer eine E-Mail mit einem Link zur gefälschten Seite senden, in der sie aufgefordert werden, sich anzumelden, um den Status einer Bestellung zu überprüfen oder eine Nachricht zu erhalten.

### Abwehrmaßnahmen

- **Unterstützung von Passwortmanagern**
  - : Ein Passwortmanager ist eine Anwendung, die es Benutzern ermöglicht, Passwörter zu speichern, sodass sich diese nicht merken müssen. Passwortmanager können auch Passwörter in Anmeldeformulare automatisch ausfüllen und starke Passwörter für die Benutzer generieren. Passwortmanager werden häufig als Browsererweiterungen implementiert, und Browser bieten auch ihre eigenen integrierten Passwortmanager an.

    Passwortmanager helfen, die Gefahr von [Erratungsangriffen](#guessing) und [Credential Stuffing](#credential_stuffing) Angriffen zu reduzieren, indem sie es Benutzern erleichtern, starke Passwörter zu haben und die Wiederverwendung von Passwörtern zu verringern. Sie helfen auch gegen [Phishing](/de/docs/Web/Security/Attacks/Phishing#password_managers), da sie keine Anmeldeinformationen in den „lookalike“-Webseiten ausfüllen, die bei Phishing-Angriffen verwendet werden, was dem Benutzer hilft, zu erkennen, dass die Seite nicht legitim ist.

    In unseren Richtlinien für die [Registrierung](#registrierung) und [Anmeldung](#anmeldung) beschreiben wir, wie sichergestellt werden kann, dass Passwortmanager mit Ihrer Seite arbeiten können.

- **Auswahl starker Passwörter**
  - : Um gegen [Erraten](#guessing) und [Credential Stuffing](#credential_stuffing) Angriffe zu verteidigen, können Sie, wenn der Benutzer ein neues Passwort bei der [Registrierung](#registrierung) oder [Passwortzurücksetzung](#passwort-zurücksetzung) erstellt, überprüfen, ob es schwach ist oder auf Listen bekannter kompromittierter Passwörter erscheint.

- **Sichere Passwortübertragung**
  - : Zur Abwehr von [Abfangangriffen](#interception) müssen Passwörter immer über {{Glossary("HTTPS", "HTTPS")}} übertragen werden. Dies sollte keine spezifische Anforderung für die Passwortübertragung sein: Alle Seiten Ihrer Website sollten immer über HTTPS übertragen werden, um [Manipulator in der Mitte (MITM)](/de/docs/Web/Security/Attacks/MITM) Angriffe zu mildern.

- **Sichere Passwortspeicherung**
  - : Um gegen [Datenbankkompromittierung](#database_compromise) zu verteidigen, muss der Server Passwörter in einer Form speichern, die es einem Angreifer unmöglich macht, das ursprüngliche Passwort abzurufen, selbst wenn sie Zugriff auf die Serverdatenbank erhalten. Die Anforderungen dafür werden wir in unseren Richtlinien für den [Registrierung](#registrierung) Ablauf behandeln.

In den nächsten drei Abschnitten werden wir uns die Hauptabläufe eines passwortbasierten Authentifizierungssystems genauer ansehen:

- [Registrierung](#registrierung)
- [Anmeldung](#anmeldung)
- [Passwortzurücksetzung](#passwort-zurücksetzung)

In jedem Abschnitt werden wir Praktiken hervorheben, die dazu beitragen, die durch die aufgelisteten Angriffe verursachten Bedrohungen zu minimieren. Wie wir sehen werden, ist es jedoch unmöglich, sie vollständig zu eliminieren.

## Registrierung

Bei der Registrierung gibt ein neuer Benutzer einen neuen Benutzernamen und ein neues Passwort an. Die Seite wird sehr wahrscheinlich auch nach einer E-Mail-Adresse fragen und könnte sich entscheiden, die E-Mail-Adresse als Benutzernamen zu verwenden.

Die Seite sollte nach diesen Informationen mit einem HTML-{{htmlelement("form")}} fragen.

### Formulargestaltung

Gut gestaltete Formulare helfen Benutzern, effektiv mit Passwörtern zu arbeiten, und sie helfen auch Passwortmanagern, sich in eine Seite zu integrieren.

Normalerweise wird ein Passwortmanager in einem Registrierungsformular:

- Erkennen, wenn ein Benutzer aufgefordert wird, ein neues Passwort zu erstellen, und anbieten, eines zu generieren. Dies hilft, [Erraten](#guessing) und [Credential Stuffing](#credential_stuffing) Angriffe zu schützen.
- Erkennen, wann ein Benutzer ein Registrierungsformular übermittelt und anbieten, den Benutzernamen und das Passwort zu speichern, die mit der Seite verbunden sind.

Die Befolgung der unten stehenden Praktiken hilft Passwortmanagern, Formulare zu erkennen, mit denen sie interagieren müssen, die Elemente, die sie enthalten, und die Punkte, an denen sie beteiligt sein müssen.

- Das `<form>` Element sollte der Registrierung gewidmet sein.
- Formulare sollten eine klare Anzeige dafür geben, dass das Formular übermittelt wurde. Das bedeutet entweder eine Navigation zu einer anderen Seite bei der Übermittlung oder eine Simulation einer Navigation mit `History.pushState()` oder `History.replaceState()`.
- Einzelne `<input>` Elemente sollten den korrekten `type` verwenden:
  - `"text"` oder `"email"` für Benutzernamen
  - `"password"` für Passwörter.
- Einzelne `<input>` Elemente sollten das richtige `autocomplete` Attribut verwenden:
  - `"username"` für Benutzername
  - `"new-password"` für die Erstellung eines neuen Passworts in Registrierungs- oder Passwortzurücksetzungsformularen
  - `"current-password"` zur Eingabe eines bestehenden Passworts in Anmelde- oder Passwortzurücksetzungsformularen
- Formulare sollten versteckte Felder für Informationen verwenden, die der Benutzer nicht eingeben muss, die aber einen Hinweis für Passwortmanager geben können. Zum Beispiel muss der Benutzer den Benutzernamen in einem Passwortänderungsformular möglicherweise nicht eingeben, aber der Benutzername kann einem Passwortmanager helfen, zu wissen, welches Passwort er eingeben soll.

Weitere Informationen finden Sie unter:

- [Best Practices für Anmeldeformulare](https://web.dev/articles/sign-in-form-best-practices#new-password)
- [Passwortmanager mit Ihrem Anmeldeformular kooperieren lassen](https://hidde.blog/making-password-managers-play-ball-with-your-login-form/)
- [Erstellen Sie erstaunliche Passwortformulare](https://www.chromium.org/developers/design-documents/create-amazing-password-forms/)

Das Registrierungsformular fordert den Benutzer normalerweise auf, das Passwort zweimal einzugeben.

### Formularübermittlung

Wenn der Benutzer das Formular übermittelt, sendet das Frontend der Website den Benutzernamen, beide Kopien des Passworts und die E-Mail-Adresse an den Server, mit einer HTTP-{{httpmethod("POST")}} Anfrage. Dies muss über {{Glossary("HTTPS", "HTTPS")}} erfolgen, um zu verhindern, dass Angreifer das Passwort während der Übertragung [abfangen](#interception).

### Benutzername- und Passwortvalidierung

Wenn der Server die `POST`-Anfrage erhält, validiert er den Benutzernamen und das Passwort. Der Benutzername darf keinem vorhandenen Benutzernamen entsprechen, und die Kopien des Passworts müssen übereinstimmen.

Das Risiko von [Erratungsangriffen](#guessing) kann reduziert werden, wenn Benutzer stärkere Passwörter wählen, und die Richtlinien, denen Websites folgen, können dabei helfen.

Wenn Benutzer neue Passwörter wählen, sollten Websites:

- Eine großzügige maximale Passwortlänge haben (mindestens 64 Zeichen).
- Alle Unicode-Zeichen zulassen.
- Nicht bestimmte Zeichentypen verlangen (zum Beispiel keine Mischung aus Groß- und Kleinbuchstaben oder Satzzeichen erfordern). Solche Regeln können viele starke Passwortoptionen ausschließen (zum Beispiel Passphrasen), und Benutzer befolgen solche Regeln normalerweise auf hochvorhersehbare Weise.

Zusätzlich können Websites:

- Das Risiko von [Erratungsangriffen](#guessing) reduzieren, indem sie Passwörter ablehnen, die auf gängigen Passwortlisten gefunden werden.
- Das Risiko von [Credential Stuffing](#credential_stuffing) Angriffen reduzieren, indem sie Passwörter ablehnen, die in Datenlecks enthalten waren. Zum Beispiel bietet die Seite [Have I Been Pwned](https://haveibeenpwned.com) Listen von in Datenlecks gefundenen Passwörtern an und stellt sie über eine [API](https://haveibeenpwned.com/API/v3#PwnedPasswords) bereit.

Beachten Sie, dass dies jedoch weit entfernt von einer vollständigen Verteidigung gegen diese Angriffe ist: Zum Beispiel könnten Datenlecks nicht öffentlich sein oder nach der Passwortwahl auftreten.

Websites sollten auch die Verwendung eines Passwortstärketools wie [zxcvbn](https://github.com/zxcvbn-ts/zxcvbn) in Betracht ziehen: Beachten Sie, dass dieses spezielle Tool auch Passwörter gegen die Have I Been Pwned Daten prüft.

Weitere Informationen finden Sie unter:

- [OWASP Authentifizierungs-Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html#implement-proper-password-strength-controls)
- [NIST-Richtlinien für digitale Identität: Authentifizierung und Lebenszyklusmanagement](https://pages.nist.gov/800-63-3/sp800-63b.html)
- [Entwicklung von Passwörtern: Authentifizierungsrichtlinien für das moderne Zeitalter](https://www.troyhunt.com/passwords-evolved-authentication-guidance-for-the-modern-era/)

Der Client kann auch Daten validieren, bevor er sie an den Server sendet, aber dies geschieht nur als Benutzerkomfort: Der Server muss die Daten dennoch validieren.

### Speicherung von Passwörtern

Falls Fehler auftreten, antwortet der Server mit einer Fehlermitteilung. Andernfalls speichert der Server das Passwort als Datensatz in seiner Datenbank, der durch den Benutzernamen gekennzeichnet ist.

#### Hashing von Passwörtern

Websites dürfen keine Passwörter im {{Glossary("plaintext", "Klartext")}} speichern. Stattdessen wird beim Registrieren mit einem neuen Passwort (oder Ändern des Passworts) das Passwort gehasht und der Hash gespeichert. Wenn der Benutzer sein Passwort bei der Anmeldung eingibt, führt die Seite:

- den Abruf des Hashs aus der Datenbank durch
- das Hashing des vom Benutzer bereitgestellten Passworts
- den Vergleich der Hashes durch.

Ein Hash ist eine _Einwegfunktion_, das heißt, es ist nicht möglich, den ursprünglichen Eingang zu einer Hashfunktion aus seinem Ausgang abzuleiten.

Dies bedeutet, dass wenn ein Angreifer Zugriff auf die Datenbank erhält, er in der Regel versuchen wird, Passwörter zu extrahieren, indem er Listen gängiger Passwörter hasht und die Ergebnisse mit den Einträgen in der Datenbank vergleicht. Aus diesem Grund sind die ausgewählten Hash-Funktionen für die Passwortspeicherung absichtlich langsam und schwer zu optimieren.

Hash-Funktionen, die speziell zur Hashing von Passwörtern entwickelt wurden, ermöglichen es Ihnen in der Regel, den Arbeitsaufwand zur Erstellung des Hashs zu konfigurieren, sodass sie langsamer oder schneller gemacht werden können, abhängig von den erwarteten Fähigkeiten des Angreifers.

#### Vorgefertigte Hash-Tabellen

Anstatt die Hash-Tabellen selbst zu berechnen, können Angreifer das Passwort, das einem Hash entspricht, in einer vorgefertigten Tabelle (auch bekannt als [Rainbow-Tabelle](https://en.wikipedia.org/wiki/Rainbow_table)) nachschlagen, die mögliche Passwörter mit ihren Hashes abbildet:

| Passwort | Hash        |
| -------- | ----------- |
| pa55w0rd | 56965E2A... |
| abcdef   | BEF57EC7... |
| letmein  | 1C8BFE8F... |

Obwohl diese Tabellen sehr groß sein können, können solche Angriffe effektiv sein, da das Nachschlagen in einer Tabelle eine schnelle Operation ist.

#### Salt und Pfeffer

Um Angriffe zu besiegen, die vorgefertigte Hash-Tabellen verwenden, muss _Salt_ hinzugefügt werden, bevor das Passwort gehasht wird. Salt ist ein zufälliger Wert, der für jedes Passwort einzigartig ist. Es muss nicht geheim sein: Salt wird zusammen mit dem gehashten Passwort gespeichert. Es verhindert jedoch, dass ein Angreifer vorgefertigte Hash-Werte verwenden kann, da das Salt bedeutet, dass ein gegebenes Passwort zu einem anderen Wert gehasht wird.

Als zusätzliche Abwehrmaßnahme können Websites auch _Pfeffer_ zur Eingabe der Hashfunktion hinzufügen. Im Gegensatz zu Salt ist Pfeffer:

- Nicht einzigartig: Der gleiche Wert wird für alle Passwörter in der Datenbank verwendet.
- Geheim: Er darf nicht in der Datenbank selbst, sondern an einem separaten Ort, wie in einem Hardware-Sicherheitsmodul (HSM), gespeichert werden.

#### Hashing-Algorithmen

Webseiten sollten Standardalgorithmen zum Hashen von Passwörtern verwenden. Diese Algorithmen unterstützen alle oben besprochenen Funktionen. Der [OWASP-Leitfaden zur Passwortspeicherung](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html#password-hashing-algorithms) empfiehlt, in Reihenfolge der Präferenz:

1. [Argon2id](https://en.wikipedia.org/wiki/Argon2)
2. [scrypt](https://en.wikipedia.org/wiki/Scrypt)
3. [bcrypt](https://en.wikipedia.org/wiki/Bcrypt)
4. [PBKDF2](https://en.wikipedia.org/wiki/PBKDF2)

#### Verwendung von Web-Frameworks

Funktionen zur Speicherung und Überprüfung von Passwörtern sind schwer sicher zu implementieren. Nutzen Sie daher besser Funktionen, die von einem etablierten Framework bereitgestellt werden, anstatt zu versuchen, Ihre eigene Implementierung zu entwickeln. Zum Beispiel verwendet [Django](https://docs.djangoproject.com/en/5.0/topics/auth/passwords/) standardmäßig PBKDF2, aber es ermöglicht Ihnen, einen anderen Algorithmus zu verwenden, wenn Sie dies möchten.

### E-Mail-Verifizierung

Wenn die Website beabsichtigt, E-Mail im Passwort-Zurücksetzungsablauf zu verwenden, muss der Server auch überprüfen, ob die E-Mail-Adresse dem sich registrierenden Benutzer gehört. Um dies zu tun, generiert der Server typischerweise ein zufälliges Token und setzt es als Parameter zu einer Verifizierungs-URL:

```plain
https://example.org/verify?<random-token>
```

Der Server sendet dann eine E-Mail an die angegebene Adresse des Benutzers. Die E-Mail fordert den Benutzer auf, auf einen Link zur Verifizierungs-URL zu klicken. Die Seite kann dann dieses Token extrahieren und es verwenden, um den Benutzerdatensatz in der Datenbank zu finden. Dann kann die E-Mail-Adresse als verifiziert markiert werden.

## Anmeldung

Um sich anzumelden, gibt der Benutzer seinen Benutzernamen und sein Passwort in ein HTML `<form>` ein, das der Anmeldung gewidmet ist.

Genau wie das Registrierungsformular sollte das Anmeldeformular so gestaltet sein, dass es mit Passwortmanagern funktioniert (und getestet wird). Dazu sollte das Formular den zuvor beschriebenen Praktiken zur [Formulargestaltung](#formulargestaltung) folgen.

Wenn der Benutzer das Formular übermittelt, sendet das Frontend der Website den Benutzernamen und das Passwort an den Server, mit einer HTTP `POST` Anfrage. Auch hier muss dies über TLS erfolgen, um zu verhindern, dass Angreifer das Passwort während der Übertragung abfangen.

Wenn der Server die `POST` Anfrage erhält, führt er aus:

- Abruf des Datensatzes für den angegebenen Benutzernamen.
- Falls ein Datensatz existiert, wird das eingegebene Passwort mit dem Wert im Datensatz verglichen.

Wenn der Vergleich erfolgreich ist, meldet der Server den Benutzer an und gibt Erfolg zurück.

Wenn der Datensatz nicht gefunden wurde oder der Vergleich fehlschlägt, muss der Server in beiden Fällen dieselbe Fehlermeldung zurückgeben. Andernfalls können Angreifer feststellen, ob ein Konto existiert und diese Information verwenden, um weitere Angriffe auszuführen.

## Passwort-Zurücksetzung

Der Passwort-Zurücksetzungsablauf ermöglicht es einem Benutzer, das Passwort zurückzusetzen, wenn er es vergessen oder verloren hat. Dies hängt meist davon ab, dass der Benutzer bei der Registrierung eine E-Mail-Adresse angegeben (und dann verifiziert) hat.

Wenn der Benutzer um eine Passwort-Zurücksetzung bittet, fordert die Website den Benutzer auf, seine E-Mail-Adresse einzugeben. Die Website kann den Benutzer in diesem Stadium auffordern, ein CAPTCHA zu lösen, um es einem böswilligen Dritten zu erschweren, einen legitimen Benutzer mit mehreren Anfragen zur Passwortzurücksetzung zu spammen.

Das Backend der Website überprüft dann, ob ein Datensatz für diese E-Mail-Adresse vorhanden ist. _Unabhängig davon, ob ein Datensatz vorhanden ist oder nicht_, gibt die Website dem Benutzer dieselbe Nachricht: dass sie eine E-Mail an die angegebene Adresse mit weiteren Anweisungen gesendet hat. Dieselbe Nachricht in beiden Fällen bereitzustellen, verhindert, dass ein Angreifer herausfindet, ob eine gegebene E-Mail-Adresse mit einem Konto verknüpft ist: Diese Information könnte für weitere Angriffe (wie gezielte [Phishing](/de/docs/Web/Security/Attacks/Phishing) oder Spear-Phishing-Angriffe) verwendet werden.

- Wenn für diese E-Mail-Adresse kein Datensatz vorhanden ist, sendet die Website eine E-Mail an die Adresse und informiert den Adressaten, dass jemand diese E-Mail-Adresse in einem „Passwort zurücksetzen“-Formular eingegeben hat, die Website jedoch keinen Datensatz für diese E-Mail-Adresse hat. Dies hilft einem legitimen Kontoinhaber, der mehrere E-Mail-Adressen hat, und die falsche Adresse im Passwort-Zurücksetzungsformular eingegeben hat.

- Wenn die Website einen Datensatz für diese E-Mail hat, dann erstellt die Website:
  - ein Rücksetzungstoken, das eine Zufallszahl ist, und speichert das Token zusammen mit dem Datensatz. Das Token erhält ein Ablaufdatum.
  - den Tokenwert als URL-Parameter zur Rücksetz-URL, wie: `https://example.org/reset?<reset-token>`.
  - sendet eine E-Mail mit dem Link an die angegebene Adresse des Benutzers und fordert ihn auf, darauf zu klicken.

Wenn der Benutzer auf den Link klickt, extrahiert die Rücksetzseite den URL-Parameter und sucht nach einem passenden gespeicherten Rücksetzungstoken. Wenn ein Rücksetzungstoken gefunden wird und nicht abgelaufen ist, erlaubt die Website dem Benutzer, ein neues Passwort einzugeben. Dieser Ablauf folgt ähnlichen Regeln wie das [Registrierungsformular](#registrierung), um zu ermöglichen, dass das neue Passwort von einem Passwortmanager erkannt wird.

Abschließend sendet die Website dem Benutzer eine E-Mail mit der Bestätigung, dass sein Passwort geändert wurde.

Weitere Informationen finden Sie unter:

- [Alles, was Sie jemals über den Aufbau einer sicheren Passwort-Zurücksetzungsfunktion wissen wollten](https://www.troyhunt.com/everything-you-ever-wanted-to-know/)
- [Passwort vergessen Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Forgot_Password_Cheat_Sheet.html)

## Schwächen passwortbasierter Authentifizierung

Die beschriebenen Praktiken helfen, die Risiken eines passwortbasierten Authentifizierungssystems zu reduzieren, aber Passwörter bleiben eine inhärent verletzliche Authentifizierungsmethode:

- Obwohl Passwortmanager und gute Passwortrichtlinien helfen können, Benutzern zu erlauben, starke Passwörter zu wählen und Passwörter nicht wiederholt zu verwenden, können sie weder garantieren, dass Benutzer starke Passwörter wählen, noch dass sie Passwörter nicht wiederverwenden, was Benutzer anfällig für Credential-Stuffing- und Erratungsangriffe macht.

- Selbst wenn Benutzer starke Passwörter haben und sie nicht wiederverwenden, bleiben sie anfällig für Phishing-Angriffe.

Um diese Schwächen zu adressieren, sollten Sie erwägen, alternative Methoden zu verwenden, entweder anstelle von Passwörtern oder als {{Glossary("multi-factor_authentication", "zusätzliche Authentifizierungsfaktoren")}}. Beispielsweise verwenden Websites manchmal Passwörter zusammen mit einem [Einmalpasswort](/de/docs/Web/Security/Authentication/OTP) als zweiten Faktor, und einige Websites unterstützen [Passkeys](/de/docs/Web/Security/Authentication/Passkeys), die gegen Phishing-Angriffe resistent sind.
