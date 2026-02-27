---
title: Manipulator in the Middle (MITM)
slug: Web/Security/Attacks/MITM
l10n:
  sourceCommit: 8e6760da4c8c8e3fbbabe9686ba16850c99092ba
---

Bei einem Manipulator-in-the-Middle-(MITM)-Angriff platziert sich der Angreifer zwischen zwei Entitäten, die versuchen, miteinander zu kommunizieren.

Im Web findet ein MITM-Angriff im Allgemeinen zwischen dem Browser des Benutzers und dem Server statt und ermöglicht es dem Angreifer, jeglichen über HTTP ausgetauschten Datenverkehr zu sehen und potenziell zu modifizieren.

Eine häufige Methode für einen Angreifer, um einen MITM-Angriff auszuführen, ist das Einrichten eines drahtlosen Zugangspunkts an einem öffentlichen Ort, wie einem Café oder einem Flughafen, und abzuwarten, bis sich ein Opfer damit verbindet. Wenn sich ein Opfer verbindet, kann der Angreifer alle zwischen dem Browser des Benutzers und allen Websites, mit denen er sich verbindet, ausgetauschten Daten lesen und ändern.

## Abwehrmaßnahmen gegen MITM

Die primäre Abwehr gegen MITM besteht darin, Ihre Website über {{Glossary("HTTPS", "HTTPS")}} (HTTP über {{Glossary("TLS", "TLS")}}) bereitzustellen. HTTPS verhindert, dass ein Angreifer den Datenverkehr lesen oder in vorhersehbarer Weise ändern kann.

Sie sollten alle Seiten über HTTPS bereitstellen, nicht nur Seiten, die Sie als besonders sensibel betrachten.

Der [TLS-Leitfaden](/de/docs/Web/Security/Defenses/Transport_Layer_Security) beschreibt die wichtigsten zu berücksichtigenden Punkte. Insbesondere:

- Verwenden Sie eine [sichere TLS-Konfiguration](/de/docs/Web/Security/Defenses/Transport_Layer_Security#configuring_tls).

- Implementieren Sie [Server-Authentifizierung](/de/docs/Web/Security/Defenses/Transport_Layer_Security#server_authentication).

- [Stellen Sie alle Ressourcen über TLS bereit](/de/docs/Web/Security/Defenses/Transport_Layer_Security#mixed_content): nicht nur HTML-Dokumente, sondern alle Subressourcen wie Skripte, Stylesheets, Bilder und Schriftarten.

- Wenn Sie HTTP-Anfragen auf HTTPS umleiten, implementieren Sie [Strict Transport Security (HSTS)](/de/docs/Web/Security/Defenses/Transport_Layer_Security#upgrading_http_connections).

## Siehe auch

- [Let's Encrypt](https://letsencrypt.org/)
- [TLS Empfohlene Konfigurationen](https://wiki.mozilla.org/Security/Server_Side_TLS#Recommended_configurations)
- [Transport Layer Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Security_Cheat_Sheet.html)
- [HTTP Strict Transport Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html)
