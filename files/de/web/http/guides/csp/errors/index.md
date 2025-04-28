---
title: CSP-Fehler und Warnungen (Content Security Policy)
slug: Web/HTTP/Guides/CSP/Errors
l10n:
  sourceCommit: c6cab7f1aa7dc9f3495486a5b46020db320101cf
---

{{HTTPSidebar}}

Wenn Sie eine der folgenden Meldungen in der Konsole der Browser-Entwicklungstools sehen, weist dies darauf hin, dass ein Problem im Zusammenhang mit [CSP](/de/docs/Web/HTTP/Guides/CSP) aufgetreten ist.

- [Die Seiteneinstellungen blockierten das Laden einer Ressource: %1$S](/de/docs/Web/HTTP/Guides/CSP/Errors/CSPViolation)
- Die Seiteneinstellungen blockierten das Laden einer Ressource bei %2$S ("%1$S").
- Ein Verstoß gegen eine nur-berichterstattende CSP-Richtlinie trat auf ("%1$S"). Das Verhalten war erlaubt, und ein CSP-Bericht wurde gesendet.
- Die Seiteneinstellungen beobachteten das Laden einer Ressource bei %2$S ("%1$S"). Ein CSP-Bericht wird gesendet.
- Versuch, Bericht an ungültige URI zu senden: "%1$S"
- Konnte Bericht-URI nicht parsen: %1$S
- Konnte unbekannte Direktive '%1$S' nicht verarbeiten
- Unbekannte Option %1$S wird ignoriert
- Doppelte Quelle %1$S wird ignoriert
- Quelle '%1$S' wird ignoriert (Nicht unterstützt, wenn über Meta-Element bereitgestellt).
- "%1$S" wird innerhalb von script-src oder style-src ignoriert: nonce-source oder hash-source angegeben
- "%1$S" wird innerhalb von script-src ignoriert: 'strict-dynamic' angegeben
- Quelle "%1$S" wird ignoriert (Nur innerhalb von script-src unterstützt).
- Schlüsselwort 'strict-dynamic' innerhalb von "%1$S" ohne gültigen Nonce oder Hash könnte das Laden aller Skripte blockieren
- Die Bericht-URI (%1$S) sollte eine HTTP- oder HTTPS-URI sein.
- Diese Seite (%1$S) hat eine nur-berichterstattende Richtlinie ohne Bericht-URI. CSP wird nicht blockieren und kann Verstöße gegen diese Richtlinie nicht melden.
- Unbekannte Quelle %1$S konnte nicht geparst werden
- Ein Versuch, Inline-Skripte auszuführen, wurde blockiert
- Ein Versuch, Inline-Stylesheets anzuwenden, wurde blockiert
- Ein Versuch, JavaScript aus einem String aufzurufen (durch Aufruf einer Funktion wie eval) wurde blockiert
- Unsichere Anfrage '%1$S' wird auf die Nutzung von '%2$S' hochgestuft
- Srcs für Direktive '%1$S' werden ignoriert
- %1$S wird als Hostname interpretiert, nicht als Schlüsselwort. Wenn dies als Schlüsselwort gemeint war, verwenden Sie '%2$S' (in einfache Anführungszeichen gesetzt).
- Direktive '%1$S' wird nicht unterstützt. Direktive und Werte werden ignoriert.
- Unsichere Anfrage '%1$S' wird blockiert.(/de/docs/Web/HTTP/Guides/CSP/Errors/blockAllMixedContent)
- '%1$S' wird ignoriert, da es keine Parameter enthält.
- Sandbox-Direktive wird ignoriert, wenn sie in einer nur-berichterstattenden Richtlinie übermittelt wird '%1$S'
- Referrer-Direktive '%1$S' wurde veraltet. Bitte verwenden Sie stattdessen den Referrer-Policy-Header.
- '%1$S' wird wegen der Direktive '%2$S' ignoriert.
- Ungültige Quelle %1$S konnte nicht geparst werden
- Ungültiger Host %1$S konnte nicht geparst werden
- Schema in %1$S konnte nicht geparst werden
- Port in %1$S konnte nicht geparst werden
- Doppelte %1$S-Direktiven erkannt. Alle bis auf die erste Instanz werden ignoriert.
- Direktive '%1$S' wurde veraltet. Bitte verwenden Sie die Direktive 'worker-src', um Worker zu kontrollieren, oder die Direktive 'frame-src', um Frames zu kontrollieren.
- Ungültiges Sandbox-Flag '%1$S' konnte nicht geparst werden.

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}} HTTP-Header
