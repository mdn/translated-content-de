---
title: Supply-Chain-Angriffe
slug: Web/Security/Attacks/Supply_chain_attacks
l10n:
  sourceCommit: 2d1f9a4d1d01322394b12feebb1f67504383730e
---

Eine _Software-Supply-Chain_ umfasst alle Software und Tools, die zur Erstellung und Wartung eines Softwareprodukts verwendet werden. Dies beinhaltet nicht nur die Software, die für das Produkt selbst entwickelt wurde, sondern auch alle Software und Tools, die in der Produktion verwendet werden.

Bei einem Supply-Chain-Angriff zielt der Angreifer auf einen Teil der Lieferkette des Produkts ab, um das Produkt selbst zu kompromittieren.

Das offensichtlichste Beispiel hier ist eine Drittanbieter-Bibliothek. Wenn Sie beispielsweise ein [npm](https://www.npmjs.com/)-Paket verwenden, das von einem Drittanbieter entwickelt wurde, hat dieses die Möglichkeit, Ihre Seite zu kompromittieren. Dies kann absichtlich geschehen, wenn es bösartig ist, oder versehentlich, wenn es eigene unbeabsichtigte Schwachstellen enthält. Im Wesentlichen müssen Sie Ihren Drittanbieter-Abhängigkeiten genauso vertrauen wie Ihrem eigenen Code.

Weniger offensichtlich ist, dass dasselbe Prinzip für alle Tools gilt, die Sie bei der Erstellung Ihrer Software verwenden, einschließlich Code-Editoren, Editor-Plugins, Versionskontrollsystemen, Build-Tools und so weiter. Jedes dieser Tools könnte im Laufe der Transformationen, die es anwendet, bösartigen oder anfälligen Code in Ihr endgültiges Softwareprodukt einfügen.

In diesem Dokument skizzieren wir Praktiken, die befolgt werden sollten, um Ihre Software-Supply-Chain abzusichern. Es ist in zwei Hauptabschnitte gegliedert:

- [Absicherung Ihrer Entwicklungsumgebung](#absicherung_ihrer_entwicklungsumgebung): Praktiken, um sicherzustellen, dass Ihr eigener Code nicht kompromittiert wird.
- [Verwaltung von Drittanbieter-Abhängigkeiten](#verwaltung_von_drittanbieter-abhängigkeiten): Praktiken, um sicherzustellen, dass Ihre Abhängigkeiten nicht kompromittiert werden.

## Absicherung Ihrer Entwicklungsumgebung

Ein Weg für einen Supply-Chain-Angriff besteht darin, dass ein Angreifer Schwachstellen oder bösartigen Code direkt in Ihr eigenes Produkt einbringt. Typischerweise geschieht dies, indem der Angreifer das Konto eines Projektbetreuers kompromittiert oder Schwächen in den von den Betreuern verwendeten Entwickler-Tools ausnutzt.

Unser Leitfaden zur [operativen Sicherheit](/de/docs/Web/Security/Defenses/Operational_security#securing_your_development_environment) beschreibt Praktiken, um diesen Bedrohungen entgegenzuwirken, einschließlich:

- [Erfordernis starker Authentifizierung für Projektbetreuer](/de/docs/Web/Security/Defenses/Operational_security#requiring_strong_authentication_for_project_maintainers)
- [Implementierung rollenbasierter Zugriffskontrolle für Projektbetreuer](/de/docs/Web/Security/Defenses/Operational_security#implementing_role-based_access_control_for_project_maintainers)
- [Bewertung der von Ihnen verwendeten Tools](/de/docs/Web/Security/Defenses/Operational_security#evaluating_the_tools_you_use)
- [Absicherung Ihrer Konfiguration](/de/docs/Web/Security/Defenses/Operational_security#securing_your_configuration)

## Verwaltung von Drittanbieter-Abhängigkeiten

Drittanbieter-Abhängigkeiten beinhalten nicht nur Bibliotheken und Frameworks, die Ihr Code verwendet, sondern alle Drittanbieter-Tools, die im Entwicklungsprozess involviert sind, einschließlich Editoren, IDEs, Versionskontrollsystemen, Paketmanagern und Build-Tools.

Angreifer können Ihr Projekt kompromittieren, indem sie Schwächen in diesen Abhängigkeiten ausnutzen. Unser Leitfaden zur [operativen Sicherheit](/de/docs/Web/Security/Defenses/Operational_security#managing_third-party_dependencies) beschreibt Praktiken, um diesen Bedrohungen entgegenzuwirken, einschließlich:

- [Bewertung neuer Abhängigkeiten](/de/docs/Web/Security/Defenses/Operational_security#evaluating_new_dependencies)
- [Aktualisierung bestehender Abhängigkeiten](/de/docs/Web/Security/Defenses/Operational_security#updating_dependencies)
- [Pflege einer _Software-Stückliste_ (SBOM)](/de/docs/Web/Security/Defenses/Operational_security#maintaining_a_software_bill_of_materials)

Zusätzlich sollten Projekte [Subresource Integrity verwenden](/de/docs/Web/Security/Attacks/Supply_chain_attacks#using_subresource_integrity) für Skripte und Stylesheets, die von einer Drittanbieter-Website gehostet werden.

### Verwendung von Subresource Integrity

Viele Websites beinhalten extern gehostete Skripte: am bemerkenswertesten, aber nicht ausschließlich, Skripte, die von einem {{Glossary("CDN", "Content Delivery Network (CDN)")}} bereitgestellt werden:

```html
<script src="https://cdn.example.org/library.js"></script>
```

Dies stellt ein Risiko für Ihre Lieferkette dar: Wenn ein Angreifer Kontrolle über die Domain `cdn.example.org` erlangt, kann er das Skript durch ein bösartiges Skript ersetzen und so Ihre Seite kompromittieren.

Externe Skripte sollten, wie andere Software-Abhängigkeiten auch, Teil Ihrer SBOM sein, aber eine zusätzliche Verteidigung besteht darin, das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity)-Attribut des Skripts festzulegen:

```html
<script
  src="https://cdn.example.org/library.js"
  integrity="sha256-d5f450f7ce715d827de27ca569e183f819d33c1e7601875fd61eccbc98f56c5b"></script>
```

Der Wert dieses Attributs enthält einen {{Glossary("hash_function", "kryptografischen Hash")}} des Skriptinhalts. Wenn das Skript von einem Angreifer verändert wurde, dann wird der Browser es ablehnen zu laden und Sie werden geschützt.

Dies fügt jedoch eine zusätzliche Wartungsbelastung hinzu: Jedes Mal, wenn sich die Quelle ändert (zum Beispiel jedes Mal, wenn eine neue Version freigegeben wird), müssen Sie den Wert des Attributs in Ihrem Code aktualisieren.

Das {{htmlelement("link")}}-Element unterstützt ebenfalls das `integrity`-Attribut, sodass Sie es sowohl für CSS-Stylesheets als auch für Skripte verwenden können (und sollten).

Siehe [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity) für weitere Details.

## Verteidigungs-Checkliste

- Befolgen Sie Praktiken der operativen Sicherheit:
  - [Sichern Sie Ihre eigene Entwicklungsumgebung](/de/docs/Web/Security/Defenses/Operational_security#securing_your_development_environment).
  - [Begrenzen Sie das Risiko von Drittanbieter-Abhängigkeiten](/de/docs/Web/Security/Defenses/Operational_security#managing_third-party_dependencies).
- Verwenden Sie [Subresource Integrity](#verwendung_von_subresource_integrity) für extern referenzierte Skripte und Stylesheets.

## Siehe auch

- [Software Supply Chain Security](https://cheatsheetseries.owasp.org/cheatsheets/Software_Supply_Chain_Security_Cheat_Sheet.html) bei [owasp.org](https://owasp.org/)
