---
title: Schriften für MathML
short-title: Fonts
slug: Web/MathML/Guides/Fonts
l10n:
  sourceCommit: 96eca1db30582588adb0d71944d93d5040682233
---

Schriften mit angemessener Unicode-Abdeckung und Open Font Format-Features sind erforderlich für eine gute Mathematik-Darstellung. Diese Seite beschreibt, wie Benutzer solche mathematischen Schriften installieren können, um MathML in Browsern korrekt darzustellen.

## Installationsanweisungen

Als Faustregel wird empfohlen, sowohl _Latin Modern Math_ (das den [Computer Modern](https://en.wikipedia.org/wiki/Computer_Modern)-Stil nutzt, der für mathematische Formeln beliebt ist) als auch _STIX Two Math_ (mit großer Unicode-Abdeckung für wissenschaftliche Zeichen) zu installieren. In den nächsten Abschnitten finden Sie detaillierte Anweisungen zur Installation dieser Schriften auf verschiedenen Betriebssystemen.

### Windows

So installieren Sie die Schriften _Latin Modern Math_ und _STIX Two Math_:

1. Laden Sie [latinmodern-math-1959.zip](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) herunter.
2. Öffnen Sie das ZIP-Archiv, wechseln Sie in das Verzeichnis `latinmodern-math-1959` und dann in das Verzeichnis `otf`. Dort finden Sie eine `latinmodern-math` Schriftdatei.
3. Öffnen Sie die `latinmodern-math` Schriftdatei und klicken Sie auf die Schaltfläche **Installieren**.
4. Laden Sie [static_otf.zip](https://raw.githubusercontent.com/stipub/stixfonts/v2.13b171/zipfiles/static_otf.zip) herunter.
5. Öffnen Sie das `static_otf.zip` ZIP-Archiv und wechseln Sie in das Verzeichnis `static_otf`. Unter den Dateien finden Sie eine `STIXTwoMath-Regular` Datei.
6. Öffnen Sie die `STIXTwoMath-Regular` Datei und klicken Sie auf die Schaltfläche **Installieren**. Bei Bedarf können Sie dasselbe auch für die anderen Schriftdateien im Verzeichnis tun.

> [!NOTE]
> _Cambria Math_ ist standardmäßig in Windows installiert und sollte eine relativ gute MathML-Darstellung sicherstellen.

### macOS

So installieren Sie die Schrift _Latin Modern Math_:

1. Laden Sie [latinmodern-math-1959.zip](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) herunter.
2. Entpacken Sie das ZIP-Archiv, wechseln Sie in das Verzeichnis `latinmodern-math-1959` und dann in das Verzeichnis `otf`. Dort finden Sie eine `latinmodern-math` Schriftdatei.
3. Doppelklicken Sie auf die `latinmodern-math` Schriftdatei und klicken Sie im sich öffnenden Fenster auf die Schaltfläche **Schrift installieren**.

> [!NOTE]
> Wenn Sie macOS Ventura (Version 13) oder höher verwenden, ist _STIX Two Math_ bereits vorinstalliert und Sie können die nachfolgenden Schritte überspringen.

So installieren Sie die Schrift _STIX Two Math_:

1. Laden Sie [static_otf.zip](https://raw.githubusercontent.com/stipub/stixfonts/v2.13b171/zipfiles/static_otf.zip) herunter.
2. Öffnen Sie das `static_otf.zip` ZIP-Archiv und wechseln Sie in das Verzeichnis `static_otf`. Unter den Dateien finden Sie die `STIXTwoMath-Regular.otf` Datei.
3. Öffnen Sie die `STIXTwoMath-Regular.otf` Datei und klicken Sie im sich öffnenden Fenster auf die Schaltfläche **Schrift installieren**. Bei Bedarf können Sie dasselbe auch für die anderen Schriftdateien im Verzeichnis tun.

> [!NOTE]
> Eine veraltete Version von _STIX_ ist ab OS X Lion (Version 10.7) vorinstalliert. Obwohl einige Browser dies nutzen können, wird dringend empfohlen, die obigen Anweisungen für eine optimale Mathematik-Darstellung zu befolgen.

### Linux

Nachfolgend finden Sie Befehle, die auf populären Linux-Distributionen ausgeführt werden können, um die _Latin Modern Math_ und _STIX Two Math_ Schriften über Ihren Paketmanager zu installieren. Alternativen werden ebenfalls angeboten, falls Ihre Linux-Distribution keine speziellen Pakete für diese Schriften bereitstellt.

#### Debian-basierte Distributionen (einschließlich Ubuntu und Mint)

```bash
sudo apt-get install fonts-lmodern fonts-stix
```

> [!NOTE]
> Bis Debian 13 und Ubuntu 24 installiert das Paket `fonts-stix` STIX 1.x-Schriften, nicht _STIX Two Math_.

#### Fedora-basierte Distributionen

```bash
sudo dnf install texlive-lm-math stix-math-fonts
```

#### openSUSE-basierte Distributionen

```bash
sudo zypper install texlive-lm-math stix-fonts
```

#### Arch Linux

```bash
sudo pacman -S otf-latinmodern-math otf-stix
```

#### TeXLive-Pakete

Falls Ihre Linux-Distribution keine Pakete für die _Latin Modern Math_ und _STIX_ Schriften anbietet, sollten Sie stattdessen die `texlive` Pakete installieren, die die _Latin Modern Math_ und _XITS_ Schriften enthalten. Zum Beispiel auf Mageia:

```bash
sudo urpmi texlive-dist texlive-fontsextra
```

Allerdings müssen Sie wahrscheinlich sicherstellen, dass diese Schriften Ihrem System bekannt sind. Fügen Sie eine fontconfig-Konfiguration `/etc/fonts/conf.avail/09-texlive-fonts.conf` hinzu, die auf das `opentype` Verzeichnis von TeXLive verweist, wie:

```xml
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
  <dir>/your/path/to/texmf-dist/fonts/opentype</dir>
</fontconfig>
```

Fügen Sie schließlich diese Konfigurationsdatei der Systemschriftortliste hinzu und regenerieren Sie den fontconfig-Cache:

```bash
ln -sf /etc/fonts/conf.avail/09-texlive-fonts.conf /etc/fonts/conf.d/
fc-cache -sf
```

#### Upstream-Pakete

Wenn keine Pakete auf Ihren Linux-Distributionen verfügbar sind oder wenn Sie nur die Upstream-Pakete installieren möchten, versuchen Sie dies:

1. Laden Sie [latinmodern-math-1959.zip](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) und [static_otf.zip](https://raw.githubusercontent.com/stipub/stixfonts/v2.13b171/zipfiles/static_otf.zip) herunter.
2. Erstellen Sie ein Verzeichnis `~/.fonts`, falls es noch nicht existiert, und legen Sie `latinmodern-math.otf` und `STIXTwoMath-Regular.otf` in diesem Verzeichnis ab.
3. Führen Sie `fc-cache -f` aus, um den fontconfig-Cache zu regenerieren.

### Android

Sie müssen das [MathML-fonts Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/) verwenden.

Noto Sans Math bietet eine gute Unicode-Abdeckung für mathematische Symbole und [mathematische Layouts](https://github.com/notofonts/math/blob/main/documentation/building-math-fonts/index.md).

### Andere Systeme

Auf anderen Systemen sollten Sie in Erwägung ziehen, eine [Schrift mit einer MATH-Tabelle](#schriften_mit_einer_math-tabelle) über Ihren Paketmanager zu installieren. Beachten Sie, dass diese Schriften generell mit TeX-Distributionen wie [TeX Live](https://www.tug.org/texlive/) geliefert werden, aber es könnte sein, dass Sie spezielle Anweisungen befolgen müssen, damit Ihr System die Schriften erkennt. Als letzte Maßnahme installieren Sie das [MathML fonts Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/).

## Erweitertes Setup

In den nächsten Abschnitten finden Sie weitere nützliche Tipps zur Installation und Konfiguration von Schriften für MathML.

### Arabische mathematische alphabetische Symbole

Derzeit verfügen sehr wenige Schriften über geeignete Glyphen für die arabischen mathematischen alphabetischen Symbole. Wenn Sie wahrscheinlich diese Zeichen benötigen, empfehlen wir die Installation der _XITS_ oder [Amiri](https://aliftype.com/amiri/) Schriften.

### Installation ohne Administratorrechte

Wenn Sie Schriften auf einem System ohne Administratorrechte installieren müssen, ist die einfachste Option, das [MathML-fonts Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/) zu verwenden. Beachten Sie, dass die Verwendung des Add-ons nicht optimal ist, da es Ihren Gecko-Browser zwingt, ein CSS-Stylesheet auf jeder Seite, die Sie besuchen, sowie Web-Schriften auf allen Seiten mit MathML-Inhalten zu laden.

Eine bessere Alternative auf UNIX-Systemen ist es, die OTF-Dateien für [Latin Modern Math](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) und [STIX](https://github.com/stipub/stixfonts) in einigen lokalen Schriftordner zu installieren und (falls notwendig) `fc-cache` darauf auszuführen. Auf macOS und Linux sind die Standardpfade respektive `~/Library/Fonts/` und `~/.fonts`.

### Schriften mit einer MATH-Tabelle

Sie können tatsächlich jede [mathematische OpenType-Schrift](https://fred-wang.github.io/MathFonts/) installieren und für die MathML-Darstellung verwenden. Einige Browser bieten eine Möglichkeit, die Standardschrift für MathML in ihrem Schriftpräferenzmenü zu konfigurieren. Alternativ können Sie das [MathML Font Settings Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-font-settings/) ausprobieren.

- [Asana Math](https://www.ctan.org/tex-archive/fonts/Asana-Math/)
- [Cambria Math](https://learn.microsoft.com/en-us/typography/font-list/?FID=360)
- [DejaVu Math TeX Gyre](https://sourceforge.net/projects/dejavu/files/dejavu/)
- [Garamond Math](https://github.com/YuanshengZhao/Garamond-Math)
- [Latin Modern Math](https://www.gust.org.pl/projects/e-foundry/lm-math)
- [Libertinus Math](https://github.com/alerque/libertinus)
- [STIX Math](https://github.com/stipub/stixfonts)
- [TeX Gyre Bonum Math](https://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Bonum_Math)
- [TeX Gyre Pagella Math](https://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Pagella_Math)
- [TeX Gyre Schola Math](https://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Schola_Math)
- [TeX Gyre Termes Math](https://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Termes_Math)
- [XITS Math](https://github.com/aliftype/xits/releases)
- [Fira Math](https://github.com/firamath/firamath)
- [GFS Neohellenic Math](https://greekfontsociety-gfs.gr/typefaces/Math)
