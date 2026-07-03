---
title: Certificate Transparency
slug: Web/Security/Defenses/Certificate_Transparency
l10n:
  sourceCommit: eb6cbe6a7b86bc59aa71c8ce0b3d3b29dd789f25
---

**Certificate Transparency** ist ein offenes Framework, das entwickelt wurde, um gegen falsche Ausstellung von Zertifikaten zu schützen und diese zu überwachen. Mit Certificate Transparency werden neu ausgestellte Zertifikate in öffentlich geführten, oft unabhängigen _CT-Protokollen_ protokolliert, die einen nur anhängbaren, kryptographisch gesicherten Nachweis über ausgestellte TLS-Zertifikate führen.

Auf diese Weise können Zertifizierungsstellen (CAs) einer viel größeren öffentlichen Prüfung und Aufsicht unterzogen werden. Potenziell schädliche Zertifikate, wie solche, die gegen die CA/B Forum _Baseline Requirements_ verstoßen, können viel schneller erkannt und widerrufen werden. Browseranbieter und Root-Store-Verwalter sind ebenfalls in der Lage, fundiertere Entscheidungen in Bezug auf problematische CAs zu treffen, die sie möglicherweise nicht vertrauen möchten.

## Hintergrund

CT-Protokolle basieren auf der Grundlage der _Merkle-Baum_-Datenstruktur. Knoten sind mit den _kryptographischen Hashes_ ihrer Kindknoten bezeichnet. Blattknoten enthalten Hashes von tatsächlichen Datenstücken. Das Label des Wurzelknotens hängt somit von allen anderen Knoten im Baum ab.

Im Kontext der Certificate Transparency sind die von den Blattknoten gehashten Daten die von den verschiedenen heute operierenden CAs ausgestellten Zertifikate. Die Inklusion eines Zertifikats kann über einen _Audit-Nachweis_ verifiziert werden, der effizient und in logarithmischer O(log n) Zeit generiert und verifiziert werden kann.

Certificate Transparency entstand erstmals 2013 vor dem Hintergrund von CA-Kompromissen (DigiNotar-Einbruch im Jahr 2011), fragwürdigen Entscheidungen (Trustwave-Nebenstellen-Zwischenfall im Jahr 2012) und technischen Ausstellungsproblemen (schwächere, 512-Bit-Zertifikate von DigiCert Sdn Bhd aus Malaysia).

## Implementierung

Wenn Zertifikate in ein CT-Protokoll eingereicht werden, wird ein _Signed Certificate Timestamp_ (SCT) generiert und zurückgegeben. Dies dient als Nachweis, dass das Zertifikat eingereicht wurde und dem Protokoll hinzugefügt wird.

Die Spezifikation besagt, dass konforme Server eine Anzahl dieser SCTs TLS-Clients bereitstellen _müssen_, wenn sie eine Verbindung herstellen. Dies kann über verschiedene Mechanismen erreicht werden:

- X.509v3-Zertifikats-Erweiterung, die Signed Certificate Timestamps direkt in das Blattzertifikat einbettet
- Eine TLS-Erweiterung vom Typ `signed_certificate_timestamp`, die während des Handshakes gesendet wird
- OCSP-Stapling (das heißt, die `status_request`-TLS-Erweiterung) und Bereitstellung einer `SignedCertificateTimestampList` mit einem oder mehreren SCTs

Bei der X.509-Zertifikats-Erweiterung werden die enthaltenen SCTs von der ausstellenden CA entschieden. Seit Juni 2021 enthalten die meisten aktiv genutzten und gültigen öffentlich vertrauenswürdigen Zertifikate Transparenzdaten, die in diese Erweiterung eingebettet sind. Diese Methode sollte keine Modifizierung von Webservern erfordern.

Bei den letzteren Methoden müssen Server aktualisiert werden, um die erforderlichen Daten zu senden. Der Vorteil besteht darin, dass der Serverbetreiber die CT-Protokollquellen anpassen kann, die die über die TLS-Erweiterung/gestapelte OCSP-Antwort gesendeten SCTs bereitstellen.

## Anforderungen der Browser

Chrome überprüft die TLS-Zertifikate einer Website auf Übereinstimmung mit den [Chrome CT-Richtlinien](https://googlechrome.github.io/CertificateTransparency/ct_policy.html). Öffentlich vertrauenswürdige Zertifikate müssen von SCTs begleitet werden, die die Richtlinien erfüllen und erfolgreich validieren.

Apple [erfordert](https://support.apple.com/en-gb/103214) eine unterschiedliche Anzahl von SCTs, damit Safari und andere Server den Server-Zertifikaten vertrauen.

Firefox für Desktop, ab Version 135, und Firefox für Android, ab Version 145, erfordern die Inklusion von CT-Protokollen für alle von den Zertifizierungsstellen in Mozillas Root CA Programm ausgestellten Zertifikate.

## Spezifikationen

Browserimplementierungen basieren auf der veralteten Spezifikation {{rfc("6962","Certificate Transparency")}} (Januar 2025). Die aktuelle Spezifikation ist {{rfc("9162","Certificate Transparency Version 2.0")}}.

## Siehe auch

- [Apples Certificate Transparency-Protokollprogramm](https://support.apple.com/en-us/103703)
- [Chromes Certificate Transparency-Protokollrichtlinien](https://googlechrome.github.io/CertificateTransparency/log_policy.html)
