---
title: Zertifikatstransparenz
slug: Web/Security/Certificate_Transparency
l10n:
  sourceCommit: ade8d870ed7e18a71dc51fe25aa13d812fb82558
---

**Zertifikatstransparenz** ist ein offenes Rahmenwerk, das entworfen wurde, um gegen Fehlvergabe von Zertifikaten zu schützen und diese zu überwachen. Mit der Zertifikatstransparenz werden neu ausgegebene Zertifikate in öffentlich betriebenen, oft unabhängigen _CT-Logs_ 'protokolliert', die ein nur hinzufügbares, kryptografisch gesichertes Protokoll der ausgegebenen TLS-Zertifikate führen.

Auf diese Weise können Zertifizierungsstellen (CAs) einer weit größeren öffentlichen Kontrolle und Aufsicht unterzogen werden. Potenziell böswillige Zertifikate, wie solche, die gegen die _Baseline Requirements_ des CA/B-Forums verstoßen, können viel schneller erkannt und widerrufen werden. Browser-Anbieter und Root-Store-Verwalter sind ebenfalls in der Lage, fundiertere Entscheidungen bezüglich problematischer CAs zu treffen, denen sie das Vertrauen entziehen könnten.

## Hintergrund

CT-Logs basieren auf der Grundlage der _Merkle-Baum_-Datenstruktur. Knoten sind mit den _kryptografischen Hashes_ ihrer Kindknoten beschriftet. Blattknoten enthalten Hashes von tatsächlichen Dateneinheiten. Das Label des Wurzelknotens hängt daher von allen anderen Knoten im Baum ab.

Im Kontext der Zertifikatstransparenz sind die Daten, die von den Blattknoten gehasht werden, die Zertifikate, die von den verschiedenen heute operierenden CAs ausgegeben wurden. Die Zertifikateingliederung kann durch einen _Prüfnachweis_ verifiziert werden, der effizient in logarithmischer O(log n)-Zeit generiert und verifiziert werden kann.

Die Zertifikatstransparenz entstand zunächst 2013 vor dem Hintergrund von CA-Kompromittierungen (DigiNotar-Verstoß im Jahr 2011), fragwürdigen Entscheidungen (Trustwave-Zwischenzertifikat-Vorfall im Jahr 2012) und technischen Ausgabeproblemen (schwache, 512-Bit-Zertifikatausstellung durch DigiCert Sdn Bhd aus Malaysia).

## Implementierung

Wenn Zertifikate zu einem CT-Log eingereicht werden, wird ein _signierter Zertifikatstempel_ (SCT) generiert und zurückgegeben. Dieser dient als Nachweis dafür, dass das Zertifikat eingereicht wurde und in das Log aufgenommen wird.

In der Spezifikation heißt es, dass konforme Server eine Anzahl dieser SCTs an TLS-Clients bereitstellen _müssen_, wenn sie eine Verbindung herstellen. Dies kann über mehrere Mechanismen erreicht werden:

- X.509v3-Zertifikaterweiterung, die signierte Zertifikatstempel direkt in das Blattzertifikat einbettet
- Eine TLS-Erweiterung vom Typ `signed_certificate_timestamp`, die während des Handshakes gesendet wird
- OCSP-Stapling (also die `status_request` TLS-Erweiterung) und Bereitstellung einer `SignedCertificateTimestampList` mit einem oder mehreren SCTs

Bei der X.509-Zertifikaterweiterung werden die enthaltenen SCTs von der ausstellenden CA festgelegt. Seit Juni 2021 enthalten die meisten aktiv genutzten und gültigen öffentlich vertrauenswürdigen Zertifikate Transparenzdaten, die in dieser Erweiterung eingebettet sind. Diese Methode sollte keine Modifikationen an Webservern erfordern.

Mit den letzteren Methoden müssen Server aktualisiert werden, um die erforderlichen Daten zu senden. Der Vorteil besteht darin, dass der Serverbetreiber die CT-Log-Quellen anpassen kann, die die über die TLS-Erweiterung/gestapelte OCSP-Antwort gesendeten SCTs bereitstellen.

## Browser-Anforderungen

Google Chrome 107 und später erfordern die Einbeziehung von CT-Logs für alle Zertifikate, die mit einem notBefore-Datum nach dem 30. April 2018 ausgestellt wurden. Nutzern wird es untersagt, Websites zu besuchen, die nicht konforme TLS-Zertifikate verwenden.
Zuvor hatte Chrome die CT-Einbeziehung für _Erweiterte Validierung_ (EV) und von Symantec ausgestellte Zertifikate verlangt.

Apple [erfordert](https://support.apple.com/en-gb/103214) eine variierende Anzahl von SCTs, damit Safari und andere Server den Serverzertifikaten vertrauen.

Firefox Desktop ab Version 135 erfordert die Einbeziehung von CT-Logs für alle Zertifikate, die von Zertifizierungsstellen aus Mozillas Root CA-Programm ausgestellt wurden.
Firefox für Android erfordert derzeit nicht die Einbeziehung von CT-Logs.

## Spezifikationen

Browser-Implementierungen basieren auf der veralteten Spezifikation {{rfc("6962","Certificate Transparency")}} (Januar 2025).
Die aktuelle Spezifikation ist {{rfc("9162","Certificate Transparency Version 2.0")}}.

## Siehe auch

- [Apples Zertifikatstransparenz-Log-Programm](https://support.apple.com/en-us/103703)
- [Chromes Richtlinien für Zertifikatstransparenz-Logs](https://googlechrome.github.io/CertificateTransparency/log_policy.html)
