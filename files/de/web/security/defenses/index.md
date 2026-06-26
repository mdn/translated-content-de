---
title: Abwehrmaßnahmen
slug: Web/Security/Defenses
l10n:
  sourceCommit: f14623f12f092d92558ecb1d766069c1567fd347
---

Diese Seiten beschreiben Funktionen der Webplattform, die Abwehrmaßnahmen gegen einen oder mehrere Sicherheitsangriffe bieten.

In der Regel besteht eine Viele-zu-Viele-Beziehung zwischen Angriffen und Abwehrmaßnahmen. In jedem unserer [Angriffsleitfäden](/de/docs/Web/Security/Attacks) beschreiben wir die spezifischen Abwehrmaßnahmen gegen diesen Angriff. In den unten aufgeführten Abwehrseiten bieten wir einen breiteren Überblick über diese Abwehrmechanismen und wie sie funktionieren.

- [Zertifikatstransparenz](/de/docs/Web/Security/Defenses/Certificate_Transparency)
  - : Bietet ein öffentlich sichtbares Protokoll der ausgestellten {{Glossary("TLS", "TLS")}}-Zertifikate, wodurch es einfacher wird, jene zu erkennen, die bösartig oder fälschlicherweise ausgestellt wurden.
- [Eingabevalidierung](/de/docs/Web/Security/Defenses/Input_validation)
  - : Überprüfung, dass die vom Benutzer bereitgestellten Eingaben den Erwartungen der Website entsprechen.
- [Verhinderung von mixed content](/de/docs/Web/Security/Defenses/Mixed_content)
  - : Verhindert, dass ein über HTTPS geliefertes Dokument Subressourcen (wie Skripte, Bilder oder Schriftarten) über HTTP lädt.
- [Betriebssicherheit](/de/docs/Web/Security/Defenses/Operational_security)
  - : Sicherheitspraktiken, die sich mit den Prozessen zur Entwicklung, Erstellung, Bereitstellung und Aktualisierung eines Projekts befassen.
- [Sicherheitsrichtlinie der selben Herkunft](/de/docs/Web/Security/Defenses/Same-origin_policy)
  - : Beschränkt die Möglichkeiten, wie Inhalte, die von einem {{Glossary("origin", "origin")}} geladen wurden, auf Inhalte zugreifen können, die von einem anderen Ursprung geladen wurden. Sie steuert, in welchem Umfang Websites auf den Zustand anderer Websites zugreifen können.
- [Sichere Kontexte](/de/docs/Web/Security/Defenses/Secure_Contexts)
  - : Ein sicherer Kontext ist ein `Window` oder `Worker`, für den bestimmte Standards der Authentifizierung und Vertraulichkeit erfüllt sind. Dies bedeutet normalerweise, dass er über {{Glossary("HTTPS", "HTTPS")}} geliefert wurde. Code, der in einem sicheren Kontext ausgeführt wird, kann leistungsfähige Web-APIs nutzen, die in unsicheren Kontexten nicht verfügbar sind.
- [Subressourcen-Integrität](/de/docs/Web/Security/Defenses/Subresource_Integrity)
  - : Ermöglicht einer Website zu überprüfen, dass von einer externen Quelle (wie einem {{Glossary("CDN", "CDN")}}) geladene Skripte und Stylesheets den erwarteten Inhalt haben und nicht verändert wurden.
- [Transport Layer Security (TLS)](/de/docs/Web/Security/Defenses/Transport_Layer_Security)
  - : Ermöglicht es einem Client, sicher mit einem Server über ein unzuverlässiges Netzwerk zu kommunizieren. Insbesondere im Web wird es genutzt, um HTTP-Verbindungen zu sichern: Das resultierende Protokoll wird {{Glossary("HTTPS", "HTTPS")}} genannt. HTTPS ist der einzige wirkliche Schutz gegen [Manipulator in der Mitte (MITM)](/de/docs/Web/Security/Attacks/MITM)-Angriffe.
- [Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation)
  - : Um den Benutzer vor potenziell bösartigen Websites zu schützen, können bestimmte leistungsstarke APIs nur verwendet werden, wenn der Benutzer aktuell mit der Webseite interagiert oder mindestens einmal seit dem Laden der Seite interagiert hat.
- [Zugriff auf lokales Netzwerk](/de/docs/Web/Security/Defenses/Local_network_access)
  - : Die Technologie für lokalen Netzwerkzugriff beschränkt die Möglichkeit von Websites, Anfragen an das lokale Netzwerk des Benutzers zu stellen, und mindert so das Risiko von Angriffen wie Cross-Site-Request-Forgery. Dieser Artikel erklärt, wie der Zugriff auf das lokale Netzwerk funktioniert und was Webentwickler tun müssen, um damit zu interagieren.
