---
title: Firefox-Sicherheitsrichtlinien
slug: Web/Security/Firefox_Security_Guidelines
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

## Zweck

Dieses Dokument skizziert eine Reihe von Sicherheitsrichtlinien, die im Allgemeinen für alle Client-Anwendungen wie Firefox und Thunderbird gelten.

## Sichere Programmierprinzipien

Stellen Sie sicher, dass die Anwendung den [OWASP Secure Coding Principles](https://wiki.owasp.org/index.php/Secure_Coding_Principles) folgt:

1. Angriffsfläche minimieren
2. Sichere Standardwerte festlegen
3. Prinzip der geringsten Privilegien
4. Prinzip der mehrfachen Verteidigung
5. Sicheres Versagen
6. Vertrauen Sie Diensten nicht
7. Halten Sie die Sicherheit einfach
8. Beheben Sie Sicherheitsprobleme korrekt

## Eingabevalidierung

1. Akzeptiert die Anwendung Benutzereingaben?

   1. Überprüfen Sie eine Stichprobe von Eingabelokationen, um sicherzustellen, dass vernünftige Maximalwerte beim Akzeptieren von Benutzerdaten festgelegt sind
   2. Überprüfen Sie eine Stichprobe von Eingabelokationen, um sicherzustellen, dass die Anwendung nur einen definierten Satz akzeptabler Zeichen zulässt
   3. Stellen Sie sicher, dass Whitelisting anstelle von Blacklisting verwendet wird

2. Akzeptiert die Anwendung Benutzereingaben, die auf irgendeine Weise angezeigt werden?

   1. Überprüfen Sie eine Stichprobe von Eingabe- und Ausgabestellen, um sicherzustellen, dass vom Benutzer bereitgestellte Inhalte in der Antwort ordnungsgemäß codiert sind

## Chrome JS - Gefährliche Funktionen

Werden eine der folgenden Funktionen verwendet?

Wenn ja, stellen Sie sicher, dass sie sicher sind und dass keine besseren Alternativen verfügbar sind.

| Name                     | Risikostufe | Problem                                                                  | Lösung                                                      |
| ------------------------ | ----------- | ------------------------------------------------------------------------ | ----------------------------------------------------------- |
| eval                     | Sehr hoch   | Ruft den JavaScript-Parser auf - gefährlich bei unzuverlässigen Eingaben | Vermeiden Sie eval, wenn möglich.                           |
| setTimeout(string, time) | Sehr hoch   | Funktioniert wie eval                                                    | Verwenden Sie setTimeout(function, time, param1, param2, …) |

## C++ - Gefährliche Funktionen

Werden eine der folgenden Funktionen verwendet?

Wenn ja, stellen Sie sicher, dass sie sicher sind und dass keine besseren Alternativen verfügbar sind.

| Name                                                  | Risikostufe | Problem                                                              | Lösung                                                                                                                                                                                                                                                                                                                                                      |
| ----------------------------------------------------- | ----------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| gets                                                  | Sehr hoch   | Keine Überprüfung der Grenzen                                        | Verwenden Sie gets nicht. Verwenden Sie stattdessen fgets.                                                                                                                                                                                                                                                                                                  |
| strcpy                                                | Sehr hoch   | Keine Überprüfung der Grenzen                                        | strcpy ist nur sicher, wenn der Quellstring eine Konstante ist und das Ziel groß genug ist, um ihn aufzunehmen. Andernfalls verwenden Sie strncpy.                                                                                                                                                                                                          |
| sprintf                                               | Sehr hoch   | Keine Überprüfung der Grenzen, Format-String-Angriffe                | sprintf ist sehr schwer sicher zu verwenden. Verwenden Sie stattdessen snprintf.                                                                                                                                                                                                                                                                            |
| scanf, sscanf                                         | Hoch        | Möglicherweise keine Überprüfung der Grenzen, Format-String-Angriffe | Stellen Sie sicher, dass alle %-Direktiven den entsprechenden Argumenttypen entsprechen. Verwenden Sie keine '%s'-Direktiven ohne Grenzenprüfung. Verwenden Sie '%xs', wobei x die Puffergröße des entsprechenden Arguments ist. Verwenden Sie keine unzuverlässigen, nicht validierten Daten im Formatstring.                                              |
| strcat                                                | Hoch        | Keine Überprüfung der Grenzen                                        | Wenn Eingabegrößen nicht gut bekannt und festgelegt sind, verwenden Sie strncat anstelle.                                                                                                                                                                                                                                                                   |
| printf, fprintf, snprintf, vfprintf, vsprintf, syslog | Hoch        | Format-String-Angriffe                                               | Verwenden Sie keine unzuverlässigen, nicht validierten Daten im Formatstring. Wenn der Formatstring durch Web-Inhalte oder Benutzereingaben beeinflusst werden kann, validieren Sie ihn auf die richtige Anzahl und den richtigen Typ der %-Direktiven, bevor Sie diese Funktionen aufrufen. Stellen Sie sicher, dass die Zielgrößenargumente korrekt sind. |
| strncpy, fgets, strncat                               | Niedrig     | Möglicherweise keine Nullterminierung                                | Terminieren Sie den Zielpuffer immer explizit mit Null. Stellen Sie sicher, dass das Größenargument korrekt ist. Stellen Sie sicher, dass im Zielpuffer Platz für das Hinzufügen des Nullzeichens bleibt!                                                                                                                                                   |

## URLs

1. Verwendet die Anwendung unzuverlässige Daten, um URLs zu erstellen?

   - Stellen Sie sicher, dass solche Daten vor der Verwendung angemessen bereinigt und codiert werden.
   - Stellen Sie sicher, dass Daten, die aus diesen URLs erhalten werden, vor der Verwendung oder Speicherung überprüft werden.

2. Verfolgt die Anwendung Weiterleitungen?

   - Stellen Sie sicher, dass Sicherheitsüberprüfungen sowohl bei Weiterleitungen als auch bei der ursprünglichen Anforderungs-URI durchgeführt werden.

## Sicherheitskontrollen

1. Implementiert die Anwendung geeignete Berechtigungsprüfungen?

   - Stellen Sie sicher, dass die richtigen APIs verwendet werden, wo verfügbar (z.B. shouldLoad etc.)
   - Stellen Sie sicher, dass die Anwendung sicher fehlschlägt.

## Zugriff auf Remote-Systeme

1. Greift die Anwendung auf Remote-Systeme zu?

- Stellen Sie sicher, dass TLS verwendet wird, es sei denn, es gibt einen _sehr_ guten Grund, dies nicht zu tun.
- Stellen Sie sicher, dass keine Benutzerinformationen ohne Zustimmung des Benutzers übertragen werden.

## Informationsspeicherung

1. Dateispeicherung

   1. Stellen Sie sicher, dass die Anwendung überprüft, dass alle erstellten Dateien unter erlaubten Pfaden liegen
   2. Werden Dateinamen aus unzuverlässigen Daten generiert?

      - Stellen Sie sicher, dass die Daten entsprechend codiert sind

   3. Überprüfen Sie, dass Dateien einen akzeptablen Typ haben
   4. Überprüfen Sie, dass Dateien vernünftige Größenbeschränkungen nicht überschreiten können

2. Datenbankspeicherung

   1. Stellen Sie sicher, dass alle unzuverlässigen Informationen, die an die Datenbank gesendet werden, angemessen bereinigt werden
   2. Verwenden Sie, wo möglich, typensichere Parametrisierung, um Injection-Angriffe zu verhindern

3. Sensible Informationen

   1. Stellen Sie sicher, dass alle sicherheitsrelevanten oder persönlichen Informationen angemessen geschützt sind (siehe Verschlüsselungsabschnitt)
   2. Besondere Sorgfalt ist bei Anmeldeinformationen (Passwörter, etc.) geboten - Wenn Sie mit Informationen dieser Art arbeiten und nicht wissen, was zu tun ist, lohnt es sich immer zu fragen

4. Protokollierung

   1. Vergessen Sie nicht, dass die obigen Regeln sowohl für Protokolle als auch für Ihre üblichen Anwendungsdaten gelten

## Verschlüsselung

1. Verwendet die Anwendung irgendeine Form der Verschlüsselung?
2. Sind die verwendeten Algorithmen anerkannte Standards?

## Denial of Service

1. Stellen Sie sicher, dass die Anwendung Schutz gegen die Erschöpfung von:

   1. Systemspeicher
   2. Speicherplatz

## Sicherheitswarnungen

1. Präsentiert die Anwendung dem Benutzer irgendwelche Sicherheitswarnungen?
2. Sind diese klar verständlich und angemessen?
3. Kann unzuverlässige Daten die Bedeutung der Nachrichten für den Benutzer ändern?

   - Kann Benutzereingaben die Bedeutung der Nachrichten ändern?
   - Kann Benutzereingaben Systemnachrichten vom sichtbaren Bildschirm verdrängen?
   - Kann Benutzereingaben Sonderzeichen enthalten, die die Bedeutung der Nachrichten ändern können (z.B. Unicode-Rechts-nach-Links-Override U+202E)

4. Kann ein Angreifer das Timing von Dialogen nutzen, um den Benutzer dazu zu verleiten, etwas anzuklicken, das er nicht beabsichtigt hat?

## Informationsweitergabe

1. Gibt die Anwendung Informationen weiter, die den Benutzer kompromittieren könnten?
2. Gibt die Anwendung Informationen weiter, die sie nicht weitergeben muss?
3. Gibt die Anwendung etwas weiter, das den Benutzer überraschen oder verärgern könnte?

## Frontend

1. Werden sichere Mechanismen zum Erstellen von XUL- und HTML-UI-Elementen verwendet?

   - z.B. verwenden Sie createTextNode anstelle von innerHTML oder ähnlichem

2. Erstellt die Anwendung eigene docshells (Registerkarten, iframes)?

   - Stellen Sie sicher, dass Sie den Typ dieser explizit angeben, z.B. iframe.setAttribute("type", "content")

## Referenzen

- [Web Security Verification](https://wiki.mozilla.org/WebAppSec/Web_Security_Verification)
- [Mozilla Sicherheitsüberprüfung und Best Practices](https://www-archive.mozilla.org/projects/security/components/reviewguide.html)
- [Sicherheitstipps für Mozilla- und Erweiterungsentwickler](https://www.squarefree.com/securitytips/mozilla-developers.html)
