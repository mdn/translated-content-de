---
title: Content-Security-Policy-Fehler und Warnungen
short-title: Fehler und Warnungen
slug: Web/HTTP/Guides/CSP/Errors
l10n:
  sourceCommit: c65a961090cf305a88fd496d1383a6931280cb37
---

{{HTTPSidebar}}

Wenn Sie eine der folgenden Meldungen in der Browser-Konsole der Entwicklertools sehen, weist dies auf ein Problem mit der [CSP](/de/docs/Web/HTTP/Guides/CSP) hin.

- [Die Einstellungen der Seite verhinderten das Laden einer Ressource: %1$S](/de/docs/Web/HTTP/Guides/CSP/Errors/CSPViolation)
- Die Einstellungen der Seite verhinderten das Laden einer Ressource bei %2$S ("%1$S").
- Ein Verstoß gegen eine nur berichtende CSP-Richtlinie ist aufgetreten ("%1$S"). Das Verhalten wurde erlaubt und ein CSP-Bericht wurde gesendet.
- Die Einstellungen der Seite beobachteten das Laden einer Ressource bei %2$S ("%1$S"). Ein CSP-Bericht wird gesendet.
- Versuch, Bericht an ungültige URI zu senden: "%1$S"
- Konnte Bericht-URI nicht parsen: %1$S
- Konnte unbekannte Direktive '%1$S' nicht verarbeiten
- Unbekannte Option %1$S wird ignoriert
- Doppelte Quelle %1$S wird ignoriert
- Quelle '%1$S' wird ignoriert (Nicht unterstützt, wenn über Meta-Element geliefert).
- Ignorieren von "%1$S" innerhalb von script-src oder style-src: nonce-source oder hash-source angegeben
- Ignorieren von "%1$S" innerhalb von script-src: 'strict-dynamic' angegeben
- Quelle "%1$S" wird ignoriert (Nur innerhalb von script-src unterstützt).
- Schlüsselwort 'strict-dynamic' innerhalb von "%1$S" ohne gültigen nonce oder hash könnte das Laden aller Skripte blockieren
- Die Bericht-URI (%1$S) sollte eine HTTP- oder HTTPS-URI sein.
- Diese Site (%1$S) hat eine nur berichtende Richtlinie ohne Bericht-URI. CSP wird nicht blockieren und kann Verstöße gegen diese Richtlinie nicht melden.
- Konnte nicht erkannte Quelle %1$S nicht parsen
- Ein Versuch, Inline-Skripte auszuführen, wurde blockiert
- Ein Versuch, Inline-Stylesheets anzuwenden, wurde blockiert
- Ein Versuch, JavaScript aus einem String aufzurufen (durch Aufruf einer Funktion wie eval), wurde blockiert
- Aktualisieren der unsicheren Anforderung '%1$S', um '%2$S' zu verwenden
- Ignorieren der srcs für Direktive '%1$S'
- Interpretieren von %1$S als Hostname, nicht als Schlüsselwort. Wenn dies als Schlüsselwort beabsichtigt war, verwenden Sie '%2$S' (in Anführungszeichen gesetzt).
- Direktive '%1$S' wird nicht unterstützt. Direktive und Werte werden ignoriert.
- Blockieren der unsicheren Anforderung '%1$S'.(/de/docs/Web/HTTP/Guides/CSP/Errors/blockAllMixedContent)
- Ignorieren von '%1$S', da es keine Parameter enthält.
- Ignorieren der Sandbox-Direktive, wenn sie in einer nur berichtenden Richtlinie '%1$S' geliefert wird
- Referrer-Direktive '%1$S' wurde veraltet. Bitte verwenden Sie stattdessen die Referrer-Policy-Header.
- Ignorieren von '%1$S' wegen der Direktive '%2$S'.
- Konnte ungültige Quelle %1$S nicht parsen
- Konnte ungültigen Host %1$S nicht parsen
- Konnte Schema in %1$S nicht parsen
- Konnte Port in %1$S nicht parsen
- Doppelte %1$S-Direktiven erkannt. Alle außer der ersten Instanz werden ignoriert.
- Direktive '%1$S' wurde veraltet. Bitte verwenden Sie die Direktive 'worker-src', um Worker zu kontrollieren, oder die Direktive 'frame-src', um Frames entsprechend zu kontrollieren.
- Konnte ungültiges Sandbox-Flag '%1$S' nicht parsen

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}} HTTP-Header
