---
title: Fehler und Warnungen der Content Security Policy
short-title: Fehler und Warnungen
slug: Web/HTTP/Guides/CSP/Errors
l10n:
  sourceCommit: dc788bf0ea36cb1ebe809c82aaae2c77cb3e18c0
---

Wenn Sie eine der folgenden Meldungen in der Konsole der Entwicklerwerkzeuge des Browsers sehen, weist dies auf ein Problem im Zusammenhang mit der [CSP](/de/docs/Web/HTTP/Guides/CSP) hin.

- [Die Einstellungen der Seite haben das Laden einer Ressource blockiert: %1$S](/de/docs/Web/HTTP/Guides/CSP/Errors/CSPViolation)
- Die Einstellungen der Seite haben das Laden einer Ressource bei %2$S ("%1$S") blockiert.
- Eine Verletzung ist für eine nur-Bericht-CSP-Richtlinie aufgetreten ("%1$S"). Das Verhalten wurde erlaubt und ein CSP-Bericht wurde gesendet.
- Die Einstellungen der Seite haben das Laden einer Ressource bei %2$S ("%1$S") beobachtet. Ein CSP-Bericht wird gesendet.
- Versuch, Bericht an ungültige URI zu senden: "%1$S"
- Konnte Bericht-URI nicht analysieren: %1$S
- Konnte unbekannte Direktive '%1$S' nicht verarbeiten
- Unbekannte Option %1$S wird ignoriert
- Doppelte Quelle %1$S wird ignoriert
- Quelle '%1$S' wird ignoriert (Nicht unterstützt, wenn über Meta-Element geliefert).
- "%1$S" wird innerhalb von script-src oder style-src ignoriert: nonce-source oder hash-source angegeben
- "%1$S" wird innerhalb von script-src ignoriert: 'strict-dynamic' angegeben
- Quelle "%1$S" wird ignoriert (Nur innerhalb von script-src unterstützt).
- Schlüsselwort 'strict-dynamic' innerhalb "%1$S" ohne gültigen {{Glossary("Nonce", "nonce")}} oder Hash könnte das Laden aller Skripte blockieren
- Die Bericht-URI (%1$S) sollte eine HTTP- oder HTTPS-URI sein.
- Diese Seite (%1$S) hat eine nur-Bericht-Richtlinie ohne Bericht-URI. CSP wird nicht blockieren und kann Verstöße gegen diese Richtlinie nicht melden.
- Konnte unerkannte Quelle %1$S nicht analysieren
- Ein Versuch, Inline-Skripte auszuführen, wurde blockiert
- Ein Versuch, Inline-Stylesheets anzuwenden, wurde blockiert
- Ein Versuch, JavaScript aus einem String (durch Aufruf einer Funktion wie eval) auszuführen, wurde blockiert
- Unsichere Anfrage '%1$S' wird auf '%2$S' aufgewertet
- Quellen für Direktive '%1$S' werden ignoriert
- %1$S wird als Hostname interpretiert, nicht als Schlüsselwort. Wenn Sie dies als Schlüsselwort beabsichtigt haben, verwenden Sie '%2$S' (in einfachen Anführungszeichen eingeschlossen).
- Direktive '%1$S' wird nicht unterstützt. Direktive und Werte werden ignoriert.
- Unsichere Anfrage '%1$S' wird blockiert.(/de/docs/Web/HTTP/Guides/CSP/Errors/blockAllMixedContent)
- '%1$S' wird ignoriert, da sie keine Parameter enthält.
- Sandkasten-Direktive wird ignoriert, wenn sie in einer nur-Bericht-Richtlinie '%1$S' geliefert wird
- Referrer-Direktive '%1$S' wurde veraltet. Bitte verwenden Sie stattdessen den Referrer-Policy-Header.
- '%1$S' wird wegen der Direktive '%2$S' ignoriert.
- Konnte ungültige Quelle %1$S nicht analysieren
- Ungültigen Host %1$S konnte nicht analysieren
- Konnte Schema in %1$S nicht analysieren
- Konnte Port in %1$S nicht analysieren
- Doppelte %1$S-Direktiven erkannt. Alle außer der ersten Instanz werden ignoriert.
- Direktive '%1$S' wurde veraltet. Bitte verwenden Sie die Direktive 'worker-src' zur Steuerung von Arbeitern oder die Direktive 'frame-src' zur Steuerung von Frames.
- Konnte ungültiges Sandkasten-Flag '%1$S' nicht analysieren

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}} HTTP-Header
