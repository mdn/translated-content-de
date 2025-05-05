---
title: Firefox Sicherheitsrichtlinien
slug: Web/Security/Firefox_Security_Guidelines
l10n:
  sourceCommit: ade8d870ed7e18a71dc51fe25aa13d812fb82558
---

## Zweck

Dieses Dokument skizziert eine Reihe von Sicherheitsrichtlinien, die im Allgemeinen für alle Client-Anwendungen gelten, wie zum Beispiel Firefox und Thunderbird.

## Grundsätze des sicheren Codierens

Stellen Sie sicher, dass die Anwendung den [OWASP Secure Coding Principles](https://wiki.owasp.org/index.php/Secure_Coding_Principles) folgt:

1. Minimierung der Angriffsfläche
2. Sichere Standardeinstellungen etablieren
3. Prinzip der geringsten Rechte
4. Prinzip der Tiefe Verteidigung
5. Sicheres Scheitern
6. Vertraue nicht auf Dienste
7. Halten Sie die Sicherheit einfach
8. Sicherheitsprobleme korrekt beheben

## Eingabevalidierung

1. Akzeptiert die Anwendung Benutzereingaben?

   1. Überprüfen Sie eine Stichprobe von Eingabeorten, um sicherzustellen, dass vernünftige Maximalwerte festgelegt sind, wenn Benutzerdaten akzeptiert werden
   2. Überprüfen Sie eine Stichprobe von Eingabeorten, um sicherzustellen, dass die Anwendung nur eine definierte Menge von akzeptablen Zeichen zulässt
   3. Sicherstellen, dass eine Positivliste statt einer Negativliste verwendet wird

2. Akzeptiert die Anwendung Benutzereingaben, die in irgendeiner Weise angezeigt werden?

   1. Überprüfen Sie eine Stichprobe von Ein- und Ausgabeorten, um sicherzustellen, dass vom Benutzer bereitgestellte Inhalte in der Antwort richtig kodiert sind

## Chrome JS - Gefährliche Funktionen

Werden eine der folgenden Funktionen verwendet?

Falls ja, stellen Sie sicher, dass sie sicher sind und dass keine besseren Alternativen verfügbar sind.

| Name                     | Risikostufe | Problem                                                                                 | Lösung                                                      |
| ------------------------ | ----------- | --------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| eval                     | Sehr hoch   | Ruft den JavaScript-Parser auf - gefährlich, wenn mit unzuverlässiger Eingabe verwendet | Vermeiden Sie eval, wenn möglich.                           |
| setTimeout(string, time) | Sehr hoch   | Wirkt wie eval                                                                          | Verwenden Sie setTimeout(function, time, param1, param2, …) |

## C++ - Gefährliche Funktionen

Werden eine der folgenden Funktionen verwendet?

Falls ja, stellen Sie sicher, dass sie sicher sind und dass keine besseren Alternativen verfügbar sind.

| Name                                                  | Risikostufe | Problem                                                     | Lösung                                                                                                                                                                                                                                                                                                                                        |
| ----------------------------------------------------- | ----------- | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| gets                                                  | Sehr hoch   | Keine Grenzenprüfung                                        | Verwenden Sie gets nicht. Verwenden Sie stattdessen fgets.                                                                                                                                                                                                                                                                                    |
| strcpy                                                | Sehr hoch   | Keine Grenzenprüfung                                        | strcpy ist nur sicher, wenn die Quellzeichenfolge eine Konstante ist und das Ziel groß genug ist, um sie aufzunehmen. Andernfalls verwenden Sie strncpy.                                                                                                                                                                                      |
| sprintf                                               | Sehr hoch   | Keine Grenzenprüfung, Format-String-Angriffe                | sprintf ist sehr schwer sicher zu verwenden. Verwenden Sie stattdessen snprintf.                                                                                                                                                                                                                                                              |
| scanf, sscanf                                         | Hoch        | Möglicherweise keine Grenzenprüfung, Format-String-Angriffe | Stellen Sie sicher, dass alle %-Direktiven mit den entsprechenden Argumenttypen übereinstimmen. Verwenden Sie keine '%s'-Direktiven ohne Grenzenprüfung. Verwenden Sie '%xs', wobei x die Puffergröße des entsprechenden Arguments ist. Verwenden Sie keine unzuverlässigen, nicht validierten Daten im Format-String.                        |
| strcat                                                | Hoch        | Keine Grenzenprüfung                                        | Wenn die Eingabegrößen nicht gut bekannt und festgelegt sind, verwenden Sie strncat stattdessen.                                                                                                                                                                                                                                              |
| printf, fprintf, snprintf, vfprintf, vsprintf, syslog | Hoch        | Format-String-Angriffe                                      | Verwenden Sie keine unzuverlässigen, nicht validierten Daten im Format-String. Wenn der Format-String durch Web-Inhalte oder Benutzereingaben beeinflusst werden kann, validieren Sie ihn für die richtige Anzahl und Art der %-Direktiven vor dem Aufrufen dieser Funktionen. Stellen Sie sicher, dass die Zielgrößenargumente korrekt sind. |
| strncpy, fgets, strncat                               | Niedrig     | Kann möglicherweise nicht null-terminiert werden            | Behandeln Sie immer explizit die Null-Terminierung des Zielpuffers. Stellen Sie sicher, dass das Größenargument korrekt ist. Achten Sie darauf, im Zielpuffer Platz für das Hinzufügen des Nullzeichens zu lassen!                                                                                                                            |

## URLs

1. Verwendet die Anwendung unzuverlässige Daten zur Konstruktion von URLs?

   - Stellen Sie sicher, dass solche Daten vor der Verwendung angemessen bereinigt und kodiert sind.
   - Stellen Sie sicher, dass alle Daten, die von diesen URLs stammen, vor der Verwendung oder Speicherung überprüft werden.

2. Folgt die Anwendung Weiterleitungen?

   - Stellen Sie sicher, dass Sicherheitsüberprüfungen bei Weiterleitungen sowie bei der ursprünglichen Anforderungs-URI durchgeführt werden.

## Sicherheitskontrollen

1. Implementiert die Anwendung geeignete Berechtigungsprüfungen?

   - Stellen Sie sicher, dass die richtigen APIs verwendet werden, wo verfügbar (z.B., shouldLoad, etc.)
   - Stellen Sie sicher, dass die Anwendung sicher scheitert.

## Zugriff auf entfernte Systeme

1. Greift die Anwendung auf irgendwelche entfernten Systeme zu?

- Stellen Sie sicher, dass TLS verwendet wird, es sei denn, es gibt einen _sehr_ guten Grund, dies nicht zu tun.
- Stellen Sie sicher, dass keine Benutzerdaten ohne Einwilligung des Benutzers übertragen werden.

## Informationsspeicherung

1. Dateispeicherung

   1. Stellen Sie sicher, dass die Anwendung überprüft, dass alle erstellten Dateien unter erlaubten Pfaden liegen
   2. Werden Dateinamen aus unzuverlässigen Daten generiert?

      - Stellen Sie sicher, dass die Daten entsprechend kodiert sind

   3. Überprüfen Sie, ob die Dateien von einem akzeptablen Typ sind
   4. Überprüfen Sie, ob Dateien keine vernünftigen Größenlimits überschreiten können

2. Datenbankspeicherung

   1. Stellen Sie sicher, dass alle unzuverlässigen Informationen, die an die Datenbank gesendet werden, angemessen bereinigt sind
   2. Wenn möglich, verwenden Sie typsichere Parametrisierung, um Injection-Angriffe zu verhindern

3. Sensible Informationen

   1. Stellen Sie sicher, dass alle sicherheitssensitiven oder persönlichen Informationen angemessen geschützt sind (siehe Abschnitt Verschlüsselung)
   2. Besondere Vorsicht ist bei Anmeldedaten (Passwörter, etc.) geboten - Wenn Sie mit solchen Informationen arbeiten und nicht sicher sind, was zu tun ist, lohnt es sich immer, zu fragen

4. Protokollierung

   1. Vergessen Sie nicht, dass die oben genannten Regeln auch für Protokolle sowie Ihre üblichen Anwendungsdaten gelten

## Verschlüsselung

1. Verwendet die Anwendung irgendeine Form der Verschlüsselung?
2. Sind die verwendeten Algorithmen anerkannte Standards?

## Denial of Service

1. Stellen Sie sicher, dass die Anwendung gegen Erschöpfung von:

   1. Systemspeicher
   2. Speicherplatz

## Sicherheitswarnungen

1. Präsentiert die Anwendung dem Benutzer irgendwelche Sicherheitswarnungen?
2. Sind diese klar verständlich und angemessen?
3. Kann unzuverlässige Daten die Bedeutung von Nachrichten für den Benutzer ändern?

   - Kann Benutzereingaben die Bedeutung von Nachrichten ändern?
   - Können Benutzereingaben Systemnachrichten vom sichtbaren Bildschirm verdrängen?
   - Können Benutzereingaben Sonderzeichen enthalten, die die Bedeutung von Nachrichten ändern können (z.B., Unicode-Rechts-nach-links-Umkehrung U+202E)

4. Kann ein Angreifer das Timing von Dialogen nutzen, um den Benutzer dazu zu verleiten, auf etwas zu klicken, das nicht beabsichtigt war?

## Informationsoffenlegung

1. Gibt die Anwendung Informationen preis, die den Benutzer kompromittieren könnten?
2. Gibt die Anwendung irgendwelche Informationen preis, die sie nicht muss?
3. Gibt die Anwendung irgendetwas preis, das den Benutzer überraschen oder verärgern könnte?

## Frontend

1. Werden sichere Mechanismen zur Erstellung von XUL- und HTML-Benutzeroberflächenelementen verwendet?

   - z.B., verwenden Sie createTextNode anstelle von innerHTML oder Ähnlichem

2. Erstellt die Anwendung ihre eigenen Docshells (Tabs, iframes)?

   - Stellen Sie sicher, dass Sie explizit den Typ dieser angeben, z.B., iframe.setAttribute("type", "content")

## Referenzen

- [Web Security Verification](https://wiki.mozilla.org/WebAppSec/Web_Security_Verification)
- [Mozilla Security Review and Best Practices](https://www-archive.mozilla.org/projects/security/components/reviewguide.html)
- [Sicherheitstipps für Mozilla- und Erweiterungsentwickler](https://www.squarefree.com/securitytips/mozilla-developers.html)
