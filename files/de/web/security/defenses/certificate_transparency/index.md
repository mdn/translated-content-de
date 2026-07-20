---
title: Certificate Transparency
slug: Web/Security/Defenses/Certificate_Transparency
l10n:
  sourceCommit: b5ee197a87ea18acbc4dd9544efa8c0e46253785
---

**Certificate Transparency** ist ein offenes Framework, das entwickelt wurde, um gegen Fehl-Ausstellungen von Zertifikaten zu schützen und diese zu überwachen. Mit Certificate Transparency werden neu ausgestellte Zertifikate in öffentlich betriebenen, oft unabhängigen _CT-Logs_ "protokolliert" – diese behalten eine nur anhängbare, kryptografisch gesicherte Aufzeichnung der ausgestellten TLS-Zertifikate bei.

Auf diese Weise können Zertifizierungsstellen (CAs) einer viel größeren öffentlichen Kontrolle und Aufsicht unterzogen werden. Potenziell bösartige Zertifikate, wie solche, die gegen die _Baseline Requirements_ des CA/B Forums verstoßen, können viel schneller erkannt und widerrufen werden. Browser-Anbieter und Root-Store-Wartungspersonen sind außerdem befähigt, fundierte Entscheidungen in Bezug auf problematische CAs zu treffen, denen sie möglicherweise das Vertrauen entziehen möchten.

## Hintergrund

CT-Logs basieren auf der Grundlage der _Merkle-Baum_-Datenstruktur. Knoten werden mit den _kryptografischen Hashes_ ihrer Kindknoten bezeichnet. Blattknoten enthalten Hashes tatsächlicher Datenstücke. Das Label des Wurzelknotens hängt daher von allen anderen Knoten im Baum ab.

Im Kontext von Certificate Transparency sind die von den Blattknoten gehashten Daten die Zertifikate, die von den verschiedenen heute operierenden CAs ausgestellt wurden. Die Aufnahme von Zertifikaten kann über einen _Prüfnachweis_ verifiziert werden, der effizient generiert und überprüft werden kann, in logarithmischer O(log n) Zeit.

Certificate Transparency entstand ursprünglich 2013 vor dem Hintergrund von CA-Kompromissen (DigiNotar-Einbruch 2011), fragwürdigen Entscheidungen (Trustwave Zwischenzertifizierungsvorfall 2012) und technischen Ausstellungsproblemen (schwache 512-Bit-Zertifikatausstellung durch DigiCert Sdn Bhd aus Malaysia).

## Implementierung

Wenn Zertifikate zu einem CT-Log eingereicht werden, wird ein _signed certificate timestamp_ (SCT) generiert und zurückgegeben. Dies dient als Beweis, dass das Zertifikat eingereicht wurde und in das Log aufgenommen wird.

Die Spezifikation gibt an, dass konforme Server _müssen_ eine Anzahl dieser SCTs an TLS-Clients liefern, wenn sie sich verbinden. Dies kann über eine Reihe verschiedener Mechanismen erreicht werden:

- X.509v3-Zertifikaterweiterung, die signierte Zertifikatstimestamps direkt in das Blattzertifikat einbettet
- Eine TLS-Erweiterung vom Typ `signed_certificate_timestamp`, die während des Handshakes gesendet wird
- OCSP Stapling (das heißt die `status_request` TLS-Erweiterung) und das Bereitstellen einer `SignedCertificateTimestampList` mit einem oder mehreren SCTs

Bei der X.509-Zertifikaterweiterung werden die enthaltenen SCTs von der ausstellenden CA entschieden. Seit Juni 2021 enthalten die meisten aktiv genutzten und gültigen öffentlich vertrauenswürdigen Zertifikate Transparenzeraten eingebettet in dieser Erweiterung. Diese Methode sollte keine Modifikation der Webserver erfordern.

Bei den letzteren Methoden müssen die Server aktualisiert werden, um die erforderlichen Daten zu senden. Der Vorteil besteht darin, dass der Serverbetreiber die CT-Log-Quellen anpassen kann, welche die via TLS-Erweiterung/gestapelte OCSP-Antwort gesendeten SCTs bereitstellen.

## Browser-Anforderungen

Chrome überprüft die TLS-Zertifikate einer Website auf Compliance mit der [Chrome CT Policy](https://googlechrome.github.io/CertificateTransparency/ct_policy.html). Öffentlich vertrauenswürdige Zertifikate müssen von SCTs begleitet sein, die die Richtlinie erfüllen und erfolgreich validieren.

Apple [erfordert](https://support.apple.com/en-gb/103214) eine unterschiedliche Anzahl von SCTs, damit Safari und andere Server Serverzertifikaten vertrauen.

Firefox Desktop, ab Version 135, und Firefox für Android, ab Version 145, erfordern die CT-Log-Inklusion für alle Zertifikate, die von Zertifizierungsstellen im Mozilla Root CA Programm ausgestellt wurden.

## Spezifikationen

Browserimplementierungen basieren auf der veralteten Spezifikation {{rfc("6962","Certificate Transparency")}} (Januar 2025).
Die aktuelle Spezifikation ist {{rfc("9162","Certificate Transparency Version 2.0")}}.

## Siehe auch

- [Apples Certificate Transparency Log-Programm](https://support.apple.com/en-us/103703)
- [Chromes Certificate Transparency Log-Policy](https://googlechrome.github.io/CertificateTransparency/log_policy.html)
