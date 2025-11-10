---
title: Content-Security-Policy-Fehler und -Warnungen
short-title: Fehler und Warnungen
slug: Web/HTTP/Guides/CSP/Errors
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Wenn Sie eine der folgenden Meldungen in der Konsole der Entwicklerwerkzeuge des Browsers sehen, weist das darauf hin, dass ein Problem im Zusammenhang mit der [CSP](/de/docs/Web/HTTP/Guides/CSP) aufgetreten ist.

- [Die Einstellungen der Seite haben das Laden einer Ressource blockiert: %1$S](/de/docs/Web/HTTP/Guides/CSP/Errors/CSPViolation)
- Die Einstellungen der Seite haben das Laden einer Ressource bei %2$S ("%1$S") blockiert.
- Ein Verstoß gegen eine CSP-Richtlinie im Reporting-Modus ist aufgetreten ("%1$S"). Das Verhalten war erlaubt und ein CSP-Bericht wurde gesendet.
- Die Einstellungen der Seite haben das Laden einer Ressource bei %2$S ("%1$S") beobachtet. Ein CSP-Bericht wird gesendet.
- Versuch, Bericht an ungültige URI zu senden: "%1$S"
- Bericht-URI konnte nicht geparst werden: %1$S
- Unbekannte Direktive '%1$S' konnte nicht verarbeitet werden
- Unbekannte Option %1$S wird ignoriert
- Duplizierte Quelle %1$S wird ignoriert
- Quelle '%1$S' wird ignoriert (Nicht unterstützt, wenn über das Meta-Element geliefert).
- Ignoriere "%1$S" innerhalb von script-src oder style-src: nonce-source oder hash-source angegeben
- Ignoriere "%1$S" innerhalb von script-src: 'strict-dynamic' angegeben
- Quelle "%1$S" wird ignoriert (Nur innerhalb von script-src unterstützt).
- Schlüsselwort 'strict-dynamic' innerhalb von "%1$S" ohne gültige nonce oder hash könnte das Laden aller Skripte blockieren
- Die Bericht-URI (%1$S) sollte eine HTTP- oder HTTPS-URI sein.
- Diese Seite (%1$S) hat eine Report-Only-Richtlinie ohne Bericht-URI. CSP wird nicht blockieren und kann keine Verstöße gegen diese Richtlinie melden.
- Unbekannte Quelle %1$S konnte nicht geparst werden
- Ein Versuch, Inline-Skripte auszuführen, wurde blockiert
- Ein Versuch, Inline-Stylesheets anzuwenden, wurde blockiert
- Ein Versuch, JavaScript aus einem String aufzurufen (durch Aufrufen einer Funktion wie eval), wurde blockiert
- Unsichere Anfrage '%1$S' wird auf '%2$S' umgestellt
- Quellen für Direktive '%1$S' werden ignoriert
- Interpretiere %1$S als Hostname, nicht als Schlüsselwort. Wenn Sie dies als Schlüsselwort verwenden wollten, benutzen Sie '%2$S' (eingeschlossen in einfachen Anführungszeichen).
- Direktive '%1$S' wird nicht unterstützt. Direktive und Werte werden ignoriert.
- Unsichere Anfrage '%1$S' wird blockiert.(/de/docs/Web/HTTP/Guides/CSP/Errors/blockAllMixedContent)
- '%1$S' wird ignoriert, da es keine Parameter enthält.
- Sandkasten-Direktive wird ignoriert, wenn in einer Report-Only-Richtlinie geliefert '%1$S'
- Referrer-Direktive '%1$S' wurde veraltet. Bitte verwenden Sie stattdessen den Referrer-Policy-Header.
- '%1$S' wird wegen der Direktive '%2$S' ignoriert.
- Ungültige Quelle %1$S konnte nicht geparst werden
- Ungültiger Host %1$S konnte nicht geparst werden
- Scheme in %1$S konnte nicht geparst werden
- Port in %1$S konnte nicht geparst werden
- Doppelte %1$S-Direktiven erkannt. Alle außer der ersten Instanz werden ignoriert.
- Direktive '%1$S' wurde veraltet. Bitte verwenden Sie die Direktive 'worker-src', um Arbeiter zu steuern, oder die Direktive 'frame-src', um Frames zu steuern.
- Ungültiges Sandkasten-Flag '%1$S' konnte nicht geparst werden

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}} HTTP-Header
