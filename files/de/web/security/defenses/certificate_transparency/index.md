---
title: Certificate Transparency
slug: Web/Security/Defenses/Certificate_Transparency
l10n:
  sourceCommit: 39070892d5d1a5cc55312a0ac10c97f4c339384f
---

**Certificate Transparency** ist ein offenes Framework, das entwickelt wurde, um gegen Fehlermissbrauch von Zertifikaten zu schützen und diesen zu überwachen. Mit Certificate Transparency werden neu ausgestellte Zertifikate in öffentlich betriebenen, oft unabhängigen _CT-Logs_ protokolliert – diese führen eine nur anhängbare, kryptografisch gesicherte Aufzeichnung der ausgestellten TLS-Zertifikate.

Auf diese Weise können Zertifizierungsstellen (CAs) einer viel größeren öffentlichen Prüfung und Überwachung unterzogen werden. Potenziell bösartige Zertifikate, wie solche, die die CA/B Forum _Baseline Requirements_ verletzen, können viel schneller entdeckt und widerrufen werden. Browseranbieter und Root-Store-Verwalter sind ebenfalls in der Lage, fundiertere Entscheidungen in Bezug auf problematische CAs zu treffen, denen sie möglicherweise ihr Vertrauen entziehen möchten.

## Hintergrund

CT-Logs basieren auf der Grundlage der _Merkle-Baum_-Datenstruktur. Knoten sind mit den _kryptografischen Hashes_ ihrer Kindknoten gekennzeichnet. Blattknoten enthalten Hashes tatsächlicher Datenstücke. Das Label des Wurzelknotens hängt daher von allen anderen Knoten im Baum ab.

Im Kontext von Certificate Transparency sind die von den Blattknoten gehashten Daten die Zertifikate, die heute von den verschiedenen CAs ausgestellt werden. Die Einbeziehung des Zertifikats kann über einen _Auditnachweis_ überprüft werden, der effizient und in logarithmischer O(log n)-Zeit generiert und überprüft werden kann.

Certificate Transparency entstand ursprünglich im Jahr 2013 vor dem Hintergrund von CA-Kompromittierungen (DigiNotar-Einbruch 2011), fragwürdigen Entscheidungen (Trustwave-Vorfall mit der untergeordneten Root 2012) und technischen Ausgabeproblemen (schwache, 512-Bit-Zertifikatausstellung durch DigiCert Sdn Bhd aus Malaysia).

## Implementierung

Wenn Zertifikate in ein CT-Log eingereicht werden, wird ein _Signed Certificate Timestamp_ (SCT) generiert und zurückgegeben. Dies dient als Nachweis, dass das Zertifikat eingereicht wurde und dem Log hinzugefügt wird.

Die Spezifikation besagt, dass konforme Server _müssen_ eine Anzahl dieser SCTs an TLS-Clients bereitstellen, wenn sie eine Verbindung herstellen. Dies kann über eine Reihe verschiedener Mechanismen erreicht werden:

- X.509v3-Zertifikaterweiterung, die signierte Zertifikatstimecodes direkt im Blattzertifikat einbettet
- Eine TLS-Erweiterung des Typs `signed_certificate_timestamp`, die während des Handshakes gesendet wird
- OCSP-Stapling (das heißt, die `status_request` TLS-Erweiterung) und Bereitstellung einer `SignedCertificateTimestampList` mit einem oder mehreren SCTs

Bei der X.509-Zertifikaterweiterung werden die enthaltenen SCTs von der ausstellenden CA entschieden. Seit Juni 2021 enthalten die meisten aktiv verwendeten und gültigen öffentlich vertrauenswürdigen Zertifikate Transparenzdaten, die in dieser Erweiterung eingebettet sind. Diese Methode sollte keine Anpassung der Webserver erforderlich machen.

Bei den letztgenannten Methoden müssen Server aktualisiert werden, um die erforderlichen Daten zu senden. Der Vorteil ist, dass der Serverbetreiber die CT-Log-Quellen, die die SCTs über die TLS-Erweiterung/gestapelte OCSP-Antwort bereitstellen, anpassen kann.

## Browseranforderungen

Google Chrome 107 und höher erfordert die Einbeziehung von CT-Logs für alle mit einem notBefore-Datum nach dem 30. April 2018 ausgestellten Zertifikate. Nutzern wird der Zugriff auf Websites mit nicht konformen TLS-Zertifikaten verwehrt.
Zuvor hatte Chrome die Einbeziehung von CT für _Extended Validation_ (EV) und von Symantec ausgestellte Zertifikate gefordert.

Apple [erfordert](https://support.apple.com/en-gb/103214) eine unterschiedliche Anzahl von SCTs, damit Safari und andere Server den Serverzertifikaten vertrauen.

Firefox-Desktop erfordert ab Version 135 die Einbeziehung von CT-Logs für alle von den Zertifizierungsstellen im Mozilla Root CA Program ausgestellten Zertifikate.
Firefox für Android erfordert derzeit keine CT-Log-Einbeziehung.

## Spezifikationen

Browserimplementierungen basieren auf der veralteten Spezifikation {{rfc("6962","Certificate Transparency")}} (Januar 2025).
Die aktuelle Spezifikation ist {{rfc("9162","Certificate Transparency Version 2.0")}}.

## Siehe auch

- [Apples Certificate Transparency Log-Programm](https://support.apple.com/en-us/103703)
- [Chromes Certificate Transparency Log Policy](https://googlechrome.github.io/CertificateTransparency/log_policy.html)
