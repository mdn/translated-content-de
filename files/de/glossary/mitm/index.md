---
title: MitM
slug: Glossary/MitM
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Ein **Manipulator-in-the-middle-Angriff** (MitM) fängt eine Kommunikation zwischen zwei Systemen ab. Zum Beispiel kann ein WLAN-Router kompromittiert werden.

Dies lässt sich mit physischer Post vergleichen: Wenn Sie sich gegenseitig Briefe schreiben, könnte der Postbote jeden Ihrer Briefe abfangen. Er öffnet ihn, liest ihn, verändert ihn eventuell, verpackt den Brief neu und sendet ihn dann erst an denjenigen, für den Sie den Brief ursprünglich geschrieben haben. Der ursprüngliche Empfänger würde Ihnen dann einen Brief zurückschicken, den der Postbote erneut öffnet, liest, eventuell verändert, neu verpackt und Ihnen gibt. Sie würden nicht wissen, dass es einen Manipulator in der Mitte Ihres Kommunikationskanals gibt – der Postbote ist für Sie und Ihren Empfänger unsichtbar.

Sowohl bei physischer Post als auch bei Online-Kommunikation sind MITM-Angriffe schwer zu verteidigen. Einige Tipps:

- Ignorieren Sie Zertifikatswarnungen nicht einfach. Sie könnten sich mit einem Phishing-Server oder einem falschen Server verbinden.
- Sensible Seiten ohne HTTPS-Verschlüsselung in öffentlichen WLAN-Netzwerken sind nicht vertrauenswürdig.
- Überprüfen Sie auf HTTPS in Ihrer Adressleiste und stellen Sie sicher, dass die Verschlüsselung in Kraft ist, bevor Sie sich einloggen.

## Siehe auch

- OWASP: [Manipulator-in-the-middle Attacke](https://owasp.org/www-community/attacks/Manipulator-in-the-middle_attack)
- PortSwigger: [Neueste Nachrichten zu Manipulator-in-the-middle Angriffen](https://portswigger.net/daily-swig/mitm)
- Wikipedia: [Man-in-the-middle Angriff](https://en.wikipedia.org/wiki/Man-in-the-middle_attack)
