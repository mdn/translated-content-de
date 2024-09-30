---
title: CSP-Fehler und Warnungen (Content Security Policy)
slug: Web/HTTP/CSP/Errors
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Wenn Sie eine der folgenden Nachrichten in der Konsole der Entwicklerwerkzeuge des Browsers protokolliert sehen, bedeutet dies, dass ein Problem in Bezug auf [CSP](/de/docs/Web/HTTP/CSP) aufgetreten ist.

- [Die Einstellungen der Seite blockierten das Laden einer Ressource: %1$S](/de/docs/Web/HTTP/CSP/Errors/CSPViolation)
- Die Einstellungen der Seite blockierten das Laden einer Ressource bei %2$S ("%1$S").
- Es wurde ein Verstoß gegen eine nur-berichten CSP-Richtlinie ("%1$S") festgestellt. Das Verhalten wurde erlaubt, und ein CSP-Bericht wurde gesendet.
- Die Einstellungen der Seite bemerkten das Laden einer Ressource bei %2$S ("%1$S"). Ein CSP-Bericht wird gesendet.
- Versuch, Bericht an ungültige URI zu senden: "%1$S"
- Konnte Bericht-URI nicht analysieren: %1$S
- Konnte unbekannte Direktive '%1$S' nicht verarbeiten
- Unbekannte Option %1$S wird ignoriert
- Doppelter Ursprung %1$S wird ignoriert
- Ursprung '%1$S' wird ignoriert (Nicht unterstützt, wenn über Meta-Element geliefert).
- Ignoriert "%1$S" innerhalb von script-src oder style-src: nonce-source oder hash-source angegeben
- Ignoriert "%1$S" innerhalb von script-src: 'strict-dynamic' angegeben
- Ursprung "%1$S" wird ignoriert (Nur innerhalb von script-src unterstützt).
- Das Schlüsselwort 'strict-dynamic' innerhalb von "%1$S" ohne gültigen Nonce oder Hash könnte das Laden aller Skripte blockieren
- Die Bericht-URI (%1$S) sollte eine HTTP- oder HTTPS-URI sein.
- Diese Seite (%1$S) hat eine nur-berichten Richtlinie ohne eine Bericht-URI. CSP blockiert nicht und kann Verstöße gegen diese Richtlinie nicht melden.
- Konnte nicht erkannt werden: unbekannte Quelle %1$S
- Ein Versuch, Inline-Skripte auszuführen, wurde blockiert
- Ein Versuch, Inline-Stylesheets anzuwenden, wurde blockiert
- Ein Versuch, JavaScript aus einem String auszuführen (durch Aufrufen einer Funktion wie eval), wurde blockiert
- Unsichere Anfrage '%1$S' wird auf '%2$S' aktualisiert
- Ignoriere Quellen für Direktive '%1$S'
- Interpretiere %1$S als Hostname, nicht als Schlüsselwort. Wenn dies als Schlüsselwort gemeint war, verwenden Sie '%2$S' (in einfachen Anführungszeichen eingeschlossen).
- Direktive '%1$S' wird nicht unterstützt. Direktive und Werte werden ignoriert.
- Blockiere unsichere Anfrage '%1$S'.(/de/docs/Web/HTTP/CSP/Errors/blockAllMixedContent)
- Ignoriere '%1$S', da es keine Parameter enthält.
- Sandbox-Direktive wird ignoriert, wenn sie in einer nur-berichten Richtlinie '%1$S' geliefert wird
- Referrer-Direktive '%1$S' ist veraltet. Bitte verwenden Sie stattdessen den Referrer-Policy-Header.
- Ignoriere '%1$S' wegen der '%2$S'-Direktive.
- Konnte ungültige Quelle %1$S nicht analysieren
- Konnte ungültigen Host %1$S nicht analysieren
- Konnte Schema in %1$S nicht analysieren
- Konnte Port in %1$S nicht analysieren
- Doppelte %1$S-Direktiven erkannt. Alle bis auf die erste Instanz werden ignoriert.
- Direktive '%1$S' ist veraltet. Bitte verwenden Sie die Direktive 'worker-src', um Worker zu steuern, oder die Direktive 'frame-src', um Frames entsprechend zu steuern.
- Konnte ungültiges Sandbox-Flag '%1$S' nicht analysieren
